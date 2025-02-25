import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Bar = ({ current, max, color, label }: {
    current: number;
    max: number;
    color: string;
    label: string
}) => {
    const widthAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        // Iniciar animação sempre que 'current' ou 'max' mudar
        Animated.timing(widthAnim, {
            toValue: (current / max) * 100, // Largura final
            duration: 500, // Duração da animação (em milissegundos)
            useNativeDriver: false, // Necessário para animar a largura
        }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current, max]);

    return (
        <View style={styles.container}>
            <View style={styles.barContainer}>
                <View style={styles.bar}>
                    <View style={{ width: '100%', height: 20, backgroundColor: '#404040' }}>
                        <Animated.View
                            style={[
                                { backgroundColor: color, height: '100%' },
                                { width: widthAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },
                            ]}
                        />
                    </View>
                </View>
                <Text style={styles.text}>{`${current}/${max} ${label}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    sliderContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    sliderText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        marginTop: 5,
    },
    barContainer: {
        width: '100%',
        maxWidth: 300,
        alignItems: 'center',
    },
    bar: {
        width: '100%',
        height: 6,
        backgroundColor: '#404040',
        borderRadius: 5,
        overflow: 'hidden',
    },
    healthBar: {
        height: '100%',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default Bar;
