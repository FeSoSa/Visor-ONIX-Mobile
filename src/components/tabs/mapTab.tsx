/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { IGame } from '../../../typing.d.ts';

interface MapProps {
    game: IGame;
}
const { width, height } = Dimensions.get("screen");

export default function MapTab({ game }: MapProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            props: { source: require("../../../assets/locations/map.jpg") }, // Caminho da imagem
        },
        {
            props: { source: require("../../../assets/locations/storage.jpg") }, // Caminho da imagem
        },
    ];

    return (
        <ImageBackground
            source={images[currentIndex].props.source}
            style={styles.container}
            blurRadius={20}
        >
            <ImageViewer
                imageUrls={images}
                style={{ flex: 1 }}
                backgroundColor="transparent"
                onChange={(index) => setCurrentIndex(index || 0)}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});
