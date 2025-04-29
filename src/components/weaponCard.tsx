/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { IGame, IPlayer } from '../../typing.d.ts';
import api from '../utils/api.tsx';
import colors from '../utils/colors.tsx';
import constants from '../utils/constants.tsx';

interface WeaponProps {
    type: 'primary' | 'secondary';
    player: IPlayer;
    game: IGame
}
const { width, height } = Dimensions.get("screen");
export default function WeaponCard({
    type,
    player,
    game
}: WeaponProps) {

    const weapon = player.guns[type]
    const magazines = player.magazines[type]
    const magazineIndex = weapon.magazineSelected

    function changeMagazine(index: number) {
        if (magazineIndex !== index && !game.combat) {
            const updatedPlayer = {
                ...player,
                guns: {
                    ...player.guns,
                    [type]: {
                        ...player.guns[type],
                        magazineSelected: index
                    }
                }
            };

            api.post("player/save", updatedPlayer)
        }
    }

    function changeWeapon() {
        if (player.gunSelected != type && !game.combat) {
            const updatedPlayer = {
                ...player,
                gunSelected: type
            };
            api.post("player/save", updatedPlayer)
        }
    }

    return (
        <>
            <View style={styles.grid}>
                <Popover from={(sourceRef, showPopover) => (
                    <TouchableOpacity onPress={changeWeapon} onLongPress={showPopover} >
                        <View style={[
                            styles.imageContainer,
                            { height: weapon.type !== 'S' ? height * 0.2 : '100%' },
                        ]
                        } >
                            {
                                (player.guns.primary.type === 'S' || player.gunSelected === type) &&
                                <View style={styles.itemQuantity}>
                                    <FontAwesome6 name="check" size={10} color="#FFF" />
                                </View>
                            }
                            <Image
                                source={{ uri: `${constants.driveURL}${weapon.url}` }}
                                style={[styles.weaponImage]}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                )}>
                    <View style={styles.popoverContent}>
                        <Text style={styles.weaponName}>{weapon.name}</Text>
                        <Text style={styles.weaponType}>Tipo: {weapon.type}</Text>
                        <Text style={styles.weaponCapacity}>Dano: {weapon.damage}</Text>
                        <Text style={styles.weaponCapacity}>Capacidade: {weapon.capacity}</Text>
                    </View>
                </Popover>

                {weapon.type !== 'S' &&
                    <View style={styles.magazinesContainer}>
                        <FlatList
                            numColumns={6}
                            data={magazines}
                            keyExtractor={(item) => item._id!}
                            renderItem={({ item, index }) => {
                                const fillPercentage = item.bullets / item.capacity;
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.magazineItem,
                                            {
                                                height: 50,
                                                backgroundColor: item.bullets > 0 ? colors.black : player.armor.type === 'T' ? colors.vibrantRed : colors.red,
                                            },
                                        ]}
                                        onPress={() => changeMagazine(index)}
                                    >
                                        <View
                                            style={{
                                                width: '100%',
                                                backgroundColor: index === magazineIndex ? player.armor.type === 'T' ? colors.orange : colors.green : player.armor.type === 'T' ? colors.yellow : colors.lightGreen,
                                                height: `${fillPercentage * 100}%`, // Define a altura proporcional
                                                position: 'absolute',
                                                bottom: 0,
                                            }}
                                        />
                                        <Text style={{ fontWeight: 'bold', color: player.armor.type === 'T' ? colors.black : colors.white }}>
                                            {item.bullets}/{item.capacity}
                                        </Text>
                                    </TouchableOpacity>
                                );

                            }}
                        />


                    </View>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        width: '100%',
        height: height * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    weaponImage: {
        width: width * 0.2,
        height: '100%',
        resizeMode: 'contain',
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
    magazinesContainer: {
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    magazineItem: {
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    magazineText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemQuantity: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: colors.green,
        width: 16, // ou o tamanho que quiser
        height: 16,
        borderRadius: 8, // metade do width/height
        justifyContent: 'center',
        alignItems: 'center',
    },
});
