/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import api from '../utils/api';
import colors from '../utils/colors';
import Layout from './layout';
const { width } = Dimensions.get('screen');

export default function Login() {
    const [value, setValue] = useState<string>("");
    const navigation = useNavigation();
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'delete', "signIn"]

    const handlePress = (text: string) => {
        if (text === "delete") {
            const newValue = value.slice(0, -1);
            setValue(newValue);
        }
        else if (text === "signIn") {
            signIn()
        } else {
            const newValue = value + text;
            if (newValue.length <= 3) {
                setValue(newValue);
            }
        }
    };

    const signIn = async () => {
        try {
            const resp = await api.post("/signIn", { registry: `ONX-${value}` });

            if (resp?.data) {
                await AsyncStorage.setItem("user", JSON.stringify(resp.data));
                await AsyncStorage.setItem("token", resp.data.token);
                console.log("Usuário logado com sucesso!", resp.data);
                if (resp.data != null) {
                    navigation.navigate("Players");
                }
            }
        } catch (error: any) {
            Alert.alert("Erro", error?.response?.data?.message || error?.message || "Erro desconhecido");
        }
    };

    const changeUrl = async (text: string) => {
        api.defaults.baseURL = text
        await AsyncStorage.setItem("API_URL", text);
    }

    return (
        <Layout>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <View style={{ width: width * 0.5 }}>
                    <View style={styles.header}>
                        <Image source={require("../../assets/logo.png")} style={styles.logo} />
                        <TextInput
                            placeholder="URL Servidor"
                            style={{ borderBottomWidth: 1, padding: 10, color: "#FFF" }}
                            placeholderTextColor="#ccc"
                            value={api.defaults.baseURL}
                            onChangeText={changeUrl}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>Visor O.N.I.X</Text>
                        <Text style={styles.password}>{value}</Text>
                        <TouchableOpacity style={{ backgroundColor: colors.lightGreen, padding: 5, borderRadius: 7 }} onPress={() => navigation.navigate("Docs")}>
                            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
                                Documentação
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.keyboard}>
                    <FlatList data={numbers} numColumns={3} renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handlePress(item)} key={index} style={styles.key}>
                            {
                                item == "delete"
                                    ? <FontAwesome6 name="delete-left"
                                        size={35}
                                        color="#FFF" />
                                    : item == "signIn"
                                        ? <FontAwesome5 name="sign-in-alt" size={35} color='#FFF' />
                                        : <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 20 }}>{item}</Text>
                            }
                        </TouchableOpacity>
                    )} />
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 50, // Ajuste o tamanho conforme necessário
        height: 50,
        resizeMode: "contain",
    },
    header: {
        flexDirection: "row",
        gap: 10,
        padding: 10
    },
    title: {
        color: "#00ff5e",
        fontWeight: "bold",
        fontSize: 40
    },
    password: {
        padding: 20,                 // Largura fixa
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',              // Cor do texto
        letterSpacing: 30,           // Espaçamento entre os números
        textAlign: 'center',        // Centraliza o texto
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    key: {
        width: "25%",  // Ajuste o tamanho dos botões
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22c55e',
        borderRadius: 5,
        margin: 5,
    },
    keyboard: {
        width: width * 0.5,
        flexDirection: 'row',
    },
    input: {
        color: "#FFF",
    }
});