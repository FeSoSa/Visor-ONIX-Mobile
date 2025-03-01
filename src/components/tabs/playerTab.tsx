import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IGame, IPlayer } from '../../../typing.d.ts';
import colors from '../../utils/colors.tsx';
import constants from '../../utils/constants.tsx';
import Bar from '../bar.tsx';
import WeaponCard from '../weaponCard.tsx';

interface PlayerProps {
    game: IGame;
    player: IPlayer
}
const { width, height } = Dimensions.get("screen");
export default function PlayerTab({ game, player }: PlayerProps) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "#000", padding: 10 }}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: `${constants.driveURL}${player.photo}` }}
                        style={styles.playerPhoto}
                        resizeMode="contain"
                    />
                </View>

                {/* Informações do jogador */}
                <View>
                    <Text style={{ color: "#FFF", fontWeight: "bold", textAlign: "center", fontSize: 18 }}>{player.name}</Text>
                    <Text style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}>Codinome: <Text style={styles.boldText}>{player.codename}</Text></Text>
                    <Text style={{ color: "#FFF", textAlign: "center", fontSize: 12 }}>Registro: <Text style={styles.boldText}>{player.registry}</Text></Text>

                    <Bar max={player.maxHp} current={player.hp} color='#FF6347' label='HP' />
                    <Bar max={player.armor.maxHp} current={player.armor.hp} color='#155DFC' label='AP' />

                    {
                        game.combat &&
                        <View style={{ backgroundColor: colors.red, padding: 5, borderRadius: 10, alignItems: "center", marginVertical: 15 }}>
                            <Text style={{ color: "#FFF", fontWeight: 'bold' }}>Em combate</Text>
                        </View>
                    }
                </View>
            </View>

            <View style={{ flex: 2 }}>
                <WeaponCard type="primary" player={player} game={game} />
                <WeaponCard type="secondary" player={player} game={game} />
            </View >

            <View style={{ flex: 2, borderLeftWidth: 6 }}>
                {/* Itens do jogador */}
                <FlatList
                    scrollEnabled={false}
                    numColumns={3}
                    data={player.utilitaries}
                    keyExtractor={(item, index) => index.toString()} // Define a chave corretamente
                    renderItem={({ item }) => (
                        <Popover from={(
                            <TouchableOpacity style={styles.itemContainer}>
                                <View style={styles.itemQuantity}>
                                    <Text style={styles.itemQuantityText}>{item.quantity}</Text>
                                </View>
                                <View style={styles.imageContainer2}>
                                    {item.url ? (
                                        <Image
                                            source={{ uri: `${constants.driveURL}${item.url}` }}
                                            style={styles.itemImage}
                                        />
                                    ) : (
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                        )}>
                            <View style={styles.popoverContent}>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#22c55e', fontSize: 16 }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Quantidade: {item.quantity}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.desc}</Text>
                            </View>
                        </Popover>
                    )}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 45, backgroundColor: "#000" }}>
                    <Text style={styles.itemName}>Utilitários <Icon name="arrow-up" size={10} color='#FFF' /></Text>
                    <Text style={styles.itemName}><Icon name="arrow-down" size={10} color='#FFF' /> Itens</Text>
                </View>

                <FlatList scrollEnabled={false} numColumns={3} data={player.items} renderItem={({ item, index }) => (
                    <Popover from={(
                        <TouchableOpacity style={styles.itemContainer}>
                            <View style={styles.itemQuantity}>
                                <Text style={styles.itemQuantityText}>{item.quantity}</Text>
                            </View>
                            <View style={styles.imageContainer2}>
                                {item.url ? (
                                    <Image
                                        source={{ uri: `${constants.driveURL}${item.url}` }}
                                        style={styles.itemImage}
                                    />
                                ) : (
                                    <Text style={styles.itemName}>{item.name}</Text>
                                )}
                            </View>
                        </TouchableOpacity>
                    )}>
                        <View style={styles.popoverContent}>
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#22c55e', fontSize: 16 }}>{item.name}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Quantidade: {item.quantity}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.desc}</Text>
                        </View>
                    </Popover>
                )}
                />
            </View >

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        width: '100%',
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    imageContainer2: {
        width: '100%',
        height: 80,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerPhoto: {
        width: '100%',
        height: '100%',
    },
    cardContainer: {
        marginBottom: 16,
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    itemContainer: {
        backgroundColor: '#333',
        flexBasis: '30%',
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    itemQuantity: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#111',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 50,
    },
    itemQuantityText: {
        color: '#fff',
        fontSize: 12,
    },
    itemImage: {
        width: '90%',
        height: '100%',
        resizeMode: 'contain',
    },
    itemName: {
        color: '#fff',
        fontSize: 14,
    },
    playerName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    boldText: {
        fontWeight: 'bold',
    },
    registration: {
        fontSize: 14,
        marginBottom: 8,
    },
    popoverContent: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    }
});