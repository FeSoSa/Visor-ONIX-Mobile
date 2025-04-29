import { useRoute } from '@react-navigation/native';
import React, { ReactNode, useEffect, useState } from 'react';
import { AppState, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { IGame, IPlayer } from '../../typing.d.ts';
import InfoTab from '../components/tabs/infoTab.tsx';
import MapTab from '../components/tabs/mapTab.tsx';
import PlayerTab from '../components/tabs/playerTab.tsx';
import SettingTab from '../components/tabs/settingTab.tsx';
import api from '../utils/api';
import colors from '../utils/colors';
import { useWebSocket } from '../utils/ws.js';
import Layout from './layout';

const { height, width } = Dimensions.get("screen");

export default function Player() {
    const route = useRoute();
    const { registry } = route.params;
    const [menu, setMenu] = useState('map');
    const [player, setPlayer] = useState<IPlayer | null>(null);
    const [game, setGame] = useState<IGame | undefined>();
    const { message, connect } = useWebSocket();

    const [appState, setAppState] = useState(AppState.currentState);
    useEffect(() => {
        const subscription = AppState.addEventListener('change', nextAppState => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                connect(); // reconecta ao voltar
            }
            setAppState(nextAppState);
        });
        return () => {
            subscription.remove();
        };
    }, [appState, connect]);
    useEffect(() => {
        if (message) {
            try {
                const obj = JSON.parse(message);
                if (obj.event === 'player-updated') {
                    getPlayer(registry);
                }
                else if (obj.event === 'game-updated') {
                    getGame();
                }
            } catch (e) {
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    const tabContent: Record<string, ReactNode> = {
        //second: <Second game={game!} />,
        map: <MapTab game={game!} />,
        player: <PlayerTab game={game!} player={player!} />,
        rules: <InfoTab />, // Substitua pelo conteúdo de "Enemies"
        settings: <SettingTab game={game!} player={player!} />, // Substitua pelo conteúdo de "Items"
    };

    useEffect(() => {
        if (registry) {
            getGame();
            getPlayer(registry as string);
        }
    }, [registry]);

    function getPlayer(id: string) {
        api.get(`player/${id}`).then((resp) => {
            if (resp.data != null) {
                console.log(resp.data)
                setPlayer(resp.data[0]);
            }
        }).catch((error) => {
            console.error("Erro ao buscar jogador:", error);
        });
    }

    function getGame() {
        api.get("/game").then((resp) => {
            if (resp.data != null) {
                console.log(resp.data)
                setGame(resp.data);
            }
        }).catch((error) => {
            console.error("Erro ao buscar jogo:", error);
        });
    }

    return (
        <Layout>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: width * 0.12, backgroundColor: colors.gray, borderRightWidth: 8 }}>
                    {/* Ícones de navegação que alteram o estado do menu */}
                    <TouchableOpacity
                        style={[{ backgroundColor: "#FE9A00" }, styles.icon]}
                        onPress={() => setMenu('map')}>
                        <FontAwesome5 name="map-marked-alt" size={50} color='#FFF' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{ backgroundColor: "#5EA500" }, styles.icon]}
                        onPress={() => setMenu('player')}>
                        <FontAwesome5 name="user-alt" size={50} color='#FFF' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{ backgroundColor: "#0092B8" }, styles.icon]}
                        onPress={() => setMenu('rules')}>
                        <FontAwesome5 name="book" size={50} color='#FFF' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{ backgroundColor: "#525252" }, styles.icon]}
                        onPress={() => setMenu('settings')}>
                        <FontAwesome6 name="gear" size={50} color='#FFF' />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    {/* Renderizando o conteúdo baseado no estado 'menu' */}
                    {game != null && tabContent[menu]}
                </View>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
