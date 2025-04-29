import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IGame, IPlayer } from '../../../typing.d.ts';
import colors from '../../utils/colors.tsx';

interface PlayerProps {
    game: IGame;
    player: IPlayer
}
const { width, height } = Dimensions.get("screen");

export default function SettingTab({ game, player }: PlayerProps) {
    const navigation = useNavigation()

    function logout() {
        AsyncStorage.clear()
        navigation.navigate("Login");
    }

    function menu() {
        AsyncStorage.removeItem("player")
        navigation.navigate("Players");
    }

    return (
        <View style={{ padding: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", height: '100%' }}>
            <TouchableOpacity style={styles.button} onPress={menu}>
                <Text style={styles.text}>Voltar para Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: colors.red }]} onPress={logout}>
                <Text style={styles.text}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightGreen,
        width: 100,
        height: 60,
        padding: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    text: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15
    }
})