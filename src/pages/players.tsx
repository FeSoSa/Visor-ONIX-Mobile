/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IPlayer, IUser } from '../../typing.d.ts';
import api from '../utils/api';
import colors from '../utils/colors';
import constants from '../utils/constants.tsx';
import Layout from './layout';

export default function Players() {
    const navigation = useNavigation();
    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [players, setPlayers] = useState<IPlayer[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                getPlayers(parsedUser.registry); // Chama getPlayers apenas quando user é definido
            }
        };
        fetchUser();
    }, []);

    function getPlayers(registry: string) {
        if (!registry) { return; }
        api.get(`player/user/${registry}`).then((resp) => {
            if (resp.data) {
                setPlayers(resp.data);
                console.log(resp.data);
            }
        }).catch(err => console.error('Erro ao buscar players:', err));
    }

    function play(player: IPlayer) {
        if (player.status == "ACTIVE") {
            AsyncStorage.setItem('player', JSON.stringify(player));
            navigation.navigate('Player', { registry: player.registry }); // Corrigido para usar parâmetros corretamente
        }
    }

    function logout() {
        AsyncStorage.clear();
        navigation.navigate('Login'); // Certifique-se de que "Login" está registrado nas rotas
    }

    return (
        <Layout>
            <View style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: '#000',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        {user ? `Bem-vindo ${user.name}` : 'Carregando...'}
                    </Text>
                    <TouchableOpacity
                        style={{ backgroundColor: colors.red, paddingHorizontal: 30, paddingVertical: 10, borderRadius: 10 }}
                        onPress={logout} // Agora o botão chama logout()
                    >
                        <Text style={{ color: '#FFF' }}>Sair</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 'auto', gap: 20, padding: 20 }}>
                    {players.map((player, index) => (
                        <TouchableOpacity key={index} onPress={() => play(player)} style={[styles.card, player.status == 'ACTIVE' ? { borderColor: colors.lightGreen } : { borderColor: colors.red }]}>
                            <Text style={[styles.codename, player.status == 'ACTIVE' ? { backgroundColor: colors.lightGreen } : { backgroundColor: colors.red }]}>
                                {player.codename}
                            </Text>

                            <View style={styles.grid}>
                                <View >
                                    <Image source={{ uri: `${constants.driveURL}${player.photo}` }} style={styles.image} />
                                </View>

                                <View style={[styles.details, player.status == 'ACTIVE' ? { borderColor: colors.lightGreen } : { borderColor: colors.red }]}>
                                    <Text style={styles.text}>Nome: <Text style={styles.bold}>{player.name}</Text></Text>
                                    <Text style={styles.text}>Registro: <Text style={styles.bold}>{player.registry}</Text></Text>
                                    <Text style={styles.text}>Classe: <Text style={styles.bold}>{player.class}</Text></Text>

                                    <Text style={[styles.status, player.status === 'ACTIVE' ? { color: colors.green } : { color: colors.red }]}>
                                        {player.status === 'ACTIVE' ? 'ATIVO' : 'DESATIVADO'}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: colors.gray,
    },
    codename: {
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        backgroundColor: '#111',
        color: 'white',
        fontWeight: 'bold',
    },
    grid: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    text: {
        color: '#ccc',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    details: {
        flex: 2,
        paddingHorizontal: 10,
        borderLeftWidth: 4,
        borderRadius: 5,
        borderColor: '#111',
    },
    center: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    status: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});
