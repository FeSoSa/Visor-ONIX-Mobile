/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Popover from 'react-native-popover-view';
import { IPlayer } from '../../typing.d.ts';
import colors from '../utils/colors.tsx';
import constants from '../utils/constants.tsx';
import Bar from './bar.tsx';

interface Props {
    player: IPlayer;
}

const { width, height } = Dimensions.get('screen');
export default function CompanionCard({ player }: Props) {
    const companion = player.companion;

    return (
        <>
            <View style={[styles.grid, { backgroundColor: !companion.usable ? '#440005' : '' }]}>
                <Popover from={(sourceRef, showPopover) => (
                    <TouchableOpacity onLongPress={showPopover} >
                        <View style={
                            styles.imageContainer} >
                            <Image
                                source={{ uri: `${constants.driveURL}${companion.url}` }}
                                style={styles.weaponImage}
                                resizeMode="contain"
                            />
                        </View>
                    </TouchableOpacity>
                )}>
                    <View style={styles.popoverContent}>
                        <Text style={styles.weaponName}>{companion.name}</Text>
                        <Text style={styles.weaponType}>{companion.desc}</Text>
                    </View>
                </Popover>

                <View style={{ paddingHorizontal: 10 }}>
                    <Bar max={companion.maxHp} current={companion.hp} color={player.armor.type === 'T' ? colors.yellow : colors.lightGreen} label="HP" />
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
        height: height * 0.2,
        alignItems: 'center',
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
});
