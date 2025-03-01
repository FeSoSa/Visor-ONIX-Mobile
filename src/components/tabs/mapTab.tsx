/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { IGame } from '../../../typing.d.ts';
import constants from '../../utils/constants.tsx';

interface MapProps {
    game: IGame;
}
const { width, height } = Dimensions.get("screen");

export default function MapTab({ game }: MapProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<any>([]);

    useEffect(() => {
        if (game) {
            const newImages = [
                {
                    url: game.showCompleteMap
                        ? constants.driveURL + game.completeMap
                        : constants.driveURL + game.ruinedMap
                },
                ...game.others.map((it) => ({
                    url: constants.driveURL + it.props
                }))
            ];
            setImages(newImages);
            console.log("Updated images:", newImages);
        }
    }, [game]);

    return (
        <ImageBackground
            source={{ uri: images[currentIndex]?.url }}  // Passando a URL corretamente
            style={[styles.container, { flex: 1, height: '100%', width: '100%' }]} // Certifique-se que o estilo tem height e width
            blurRadius={20}
        >
            {images.length > 0 && (
                <ImageViewer
                    imageUrls={images} // Assegure que o formato de entrada está correto
                    style={{ flex: 1 }}
                    backgroundColor="transparent"
                    onChange={(index) => setCurrentIndex(index || 0)} // Verificando se o index está sendo atualizado
                />
            )}
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
