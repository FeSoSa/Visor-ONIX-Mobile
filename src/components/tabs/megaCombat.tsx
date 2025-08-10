import React, { useEffect, useState } from 'react';
import { AppState, Dimensions, Image, StyleSheet, View } from 'react-native';
import { IEnemie, IGame } from '../../../typing.d.ts.tsx';
import api from '../../utils/api.tsx';
import constants from '../../utils/constants.tsx';
import { useWebSocket } from '../../utils/ws.js';

interface MapProps {
    game: IGame;
}
const { width, height } = Dimensions.get("screen");
export default function MegaCombatTab({ game }: MapProps) {
    const [enemies, setEnemies] = useState<IEnemie[]>([]);
    const { message, connect } = useWebSocket();
    const [appState, setAppState] = useState(AppState.currentState);

    useEffect(() => {
        getEnemies();
    }, []);
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
        console.log(message)
        if (message) {
            try {
                const obj = JSON.parse(message);
                if (obj.event === 'enemie-updated') {
                    getEnemies();
                }
            } catch (e) {
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    function getEnemies() {
        api.get(`enemie/list`).then((resp) => {
            if (resp.data != null) {
                console.log(resp.data)
                setEnemies(resp.data);
            }
        }).catch((error) => {
            console.error("Erro ao buscar inimigos:", error);
        });
    }
    function getOverlayColor(hp: number, maxHp: number): string {
        const startAt = 50;
        const clampedHp = Math.min(Math.max(hp, startAt), maxHp);
        const normalized = ((clampedHp - startAt) / (maxHp - startAt)) * 100;

        const r = Math.round((100 - normalized) * 2.55);
        const g = Math.round(normalized * 2.55);
        return `rgb(${r},${g},0)`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                {enemies.map((e, index) => (
                    <View style={styles.item} key={index}>
                        <Image
                            source={{ uri: `${constants.driveURL}${e.armor.url}` }}
                            style={styles.image}
                        />
                        <View
                            style={[
                                StyleSheet.absoluteFillObject,
                                {
                                    backgroundColor: getOverlayColor(e.hp, e.maxHp),
                                    opacity: 0.3, // transparência só do overlay, não da imagem
                                    borderRadius: 10,
                                },
                            ]}
                        />
                    </View>

                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center', // centraliza o grid
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // centraliza as linhas
        gap: 8, // se usar React Native v73+
    },
    item: {
        flexBasis: width * 0.25,  // largura base (25% da tela)
        flexGrow: 1,              // pode crescer para ocupar espaço extra
        height: height * 0.4,
        margin: 4,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'black',
    }
    ,
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
