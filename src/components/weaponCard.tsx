/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import { IGame, IPlayer } from '../../typing.d.ts';
import api from '../utils/api.tsx';
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
                            { backgroundColor: player.gunSelected == type ? 'rgba(21, 128, 61,0.5)' : '' }
                        ]} >
                            <Image
                                source={{ uri: `${constants.driveURL}${weapon.url}` }}
                                style={styles.weaponImage}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                )}>
                    <View style={styles.popoverContent}>
                        <Text style={styles.weaponName}>{weapon.name}</Text>
                        <Text style={styles.weaponType}>Tipo: {weapon.type}</Text>
                        <Text style={styles.weaponCapacity}>Capacidade: {weapon.capacity}</Text>
                        <Text style={styles.weaponCapacity}>Modificador: {weapon.mod}</Text>
                    </View>
                </Popover>

                <View style={styles.magazinesContainer}>
                    <FlatList
                        numColumns={4}
                        data={magazines}
                        keyExtractor={(item) => item._id!}
                        renderItem={({ item, index }) => {
                            const fillPercentage = item.bullets / item.capacity;
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.magazineItem,
                                        {
                                            height: type === 'secondary' ? 80 : 40,
                                            backgroundColor: item.bullets > 0 ? '#000' : '#9F0712'
                                        }
                                    ]}
                                    onPress={() => changeMagazine(index)}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            backgroundColor: index === magazineIndex ? '#15803d' : '#22c55e',
                                            height: `${fillPercentage * 100}%`, // Define a altura proporcional
                                            position: 'absolute',
                                            bottom: 0,
                                        }}
                                    />
                                    <Text style={styles.magazineText}>
                                        {item.bullets}/{item.capacity}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />


                </View>
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
        height: height * 0.3,
        alignItems: "center"
    },
    weaponImage: {
        width: width * 0.3,
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
        flexWrap: 'wrap'
    },
    magazineItem: {
        borderWidth: 1,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
    },
    magazineText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
