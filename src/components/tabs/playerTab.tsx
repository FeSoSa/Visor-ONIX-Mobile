/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { IGame, IPlayer } from '../../../typing.d.ts';
import colors from '../../utils/colors.tsx';
import constants from '../../utils/constants.tsx';
import Bar from '../bar.tsx';
import CompanionCard from '../companionCard.tsx';
import WeaponCard from '../weaponCard.tsx';

interface PlayerProps {
    game: IGame;
    player: IPlayer
}
const { height } = Dimensions.get('screen');
export default function PlayerTab({ game, player }: PlayerProps) {

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.7, backgroundColor: colors.black, justifyContent: 'space-between' }}>
                <View style={{ padding: 10 }}>
                    <Popover from={(sourceRef, showPopover) => (
                        <TouchableOpacity onPress={showPopover} >
                            <View style={[styles.imageContainer, { backgroundColor: colors.gray, borderRadius: 5 }]} >
                                <Image
                                    source={{ uri: `${constants.driveURL}${player.armor.url}` }}
                                    resizeMode="contain"
                                    style={styles.armorImage}
                                />
                            </View>
                        </TouchableOpacity>
                    )}>
                        <View style={styles.popoverContent}>
                            <Text style={styles.weaponName}>{player.armor.name}</Text>
                            <Text style={styles.weaponType}>Tipo: {player.armor.type}</Text>
                            <Text style={styles.weaponCapacity}>{player.armor.desc}</Text>
                        </View>
                    </Popover>
                </View>
                <View style={{ padding: 5 }}>
                    <View style={styles.flagContainer} >
                        <Image
                            source={{ uri: `https://flagcdn.com/w320/${player.nationality ?? 'br'}.png` }}
                            resizeMode="contain"
                            style={{ height: '90%', width: '90%' }}
                        />
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View style={[styles.imageContainer, { backgroundColor: colors.gray, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }]} >
                        <Text style={{ color: colors.white, fontSize: 50 }}>{player.round ?? '-'}</Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 2 }}>
                <WeaponCard type="primary" player={player} game={game} />
                <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: colors.black, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: colors.white, textAlign: 'center', fontSize: 12 }}>{player.registry}</Text>

                        <Text style={{ color: colors.white, fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{player.name}</Text>
                        {
                            game.combat ?
                                <Text style={{ color: player.armor.type === 'T' ? colors.vibrantRed : colors.red, fontWeight: 'bold', fontSize: 10 }}>Em combate</Text>
                                : <Text style={{ color: 'transparent', fontWeight: 'bold', fontSize: 10 }}>Em combate</Text>
                        }
                    </View>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>{player.codename}</Text>
                    <Bar max={player.maxHp} current={player.hp} color={player.armor.type === 'T' ? colors.yellow : colors.lightGreen} label="HP" size={10} />
                    <Bar max={player.armor.maxHp} current={player.armor.hp} color={player.armor.type === 'T' ? colors.lightBlue : colors.blue} label="AP" size={10} />
                </View>
                {
                    player.companion == null

                        ? <WeaponCard type="secondary" player={player} game={game} />
                        : <CompanionCard player={player} />
                }
            </View >

            <View style={{ flex: 1.2, borderLeftWidth: 6 }}>
                {/* Itens do jogador */}
                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    data={player.utilitaries}
                    keyExtractor={(item, index) => index.toString()} // Define a chave corretamente
                    renderItem={({ item }) => (
                        <Popover from={(
                            <TouchableOpacity style={[styles.itemContainer, item.reloading === true ? { backgroundColor: colors.red } : { backgroundColor: colors.lightGray }]}>
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
                                <Text style={{ fontWeight: 'bold', textAlign: 'center', color: colors.lightGreen, fontSize: 16 }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Quantidade: {item.quantity}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.desc}</Text>
                            </View>
                        </Popover>
                    )}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, backgroundColor: colors.black }}>
                    <Text style={styles.itemName}>Utilitários <Icon name="arrow-up" size={10} color='#FFF' /></Text>
                    <Text style={styles.itemName}><Icon name="arrow-down" size={10} color='#FFF' /> Itens</Text>
                </View>

                <FlatList scrollEnabled={false} numColumns={2} data={player.items} renderItem={({ item }) => (
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
                            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: colors.lightGreen, fontSize: 16 }}>{item.name}</Text>
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
        height: height * 0.3,
        padding: 5
    },
    flagContainer: {
        width: '100%',
        height: height * 0.2,
        padding: 5,
        backgroundColor: "#171717",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer2: {
        width: '100%',
        height: 80,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    skillContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#333',
        flexBasis: '45%',
        margin: 5,
        borderRadius: 5,
        overflow: 'hidden',
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
        flexBasis: '45%',
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
    },
    armorImage: {
        height: '100%',
        resizeMode: 'cover',
    },
    weaponName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#22c55e',
    },
    weaponType: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    weaponCapacity: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});