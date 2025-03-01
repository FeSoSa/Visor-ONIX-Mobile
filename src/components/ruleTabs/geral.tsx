import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';


const { width, height } = Dimensions.get("screen");
export default function GeralRuleTab() {

    return (
        <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }}>
            <View style={{ paddingBottom: 50 }}>

                <Text style={styles.title}>Geral</Text>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Contexto</Text>
                    <Text style={styles.text}>
                        A missão envolve o resgate de uma figura de alto valor, mantida prisioneira em uma cidade abandonada no deserto. O local foi tomado por elementos terroristas, e a cidade está em completo colapso. Sua tarefa é localizar e resgatar o V.I.P., garantir a extração e evacuar antes de ser tarde demais. A operação exigirá precisão, rapidez e estratégia.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Objetivo Primário</Text>
                    <Text style={styles.list}>
                        • Localizar e resgatar o V.I.P. da instalação inimiga.
                    </Text>
                    <Text style={styles.list}>
                        • Garantir a segurança do alvo durante a evacuação.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Objetivo Secundário</Text>
                    <Text style={styles.list}>
                        • Eliminar quaisquer forças inimigas que representem uma ameaça direta à missão.
                    </Text>
                    <Text style={styles.list}>
                        • Coletar qualquer inteligência relevante que possa ser utilizada em operações futuras.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Pontos Críticos:</Text>
                    <Text style={styles.list}>
                        • O terreno hostil pode comprometer a comunicação e os movimentos
                    </Text>
                    <Text style={styles.list}>
                        • O clima (tempestades de areia) pode afetar a visibilidade e os equipamentos.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Aviso de Segurança</Text>
                    <Text style={styles.text}>
                        A missão ocorrerá em território altamente instável. O inimigo está armado e preparado para a resistência. A comunicação com o comando será limitada à torre de rádio e rádios individuais a 100 metros de distância.
                    </Text>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Diretrizes Operacionais:</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.subItem}>Entrada e Reconhecimento</Text>
                        <Text style={styles.list}>
                            • A cidade estará cheia de pontos críticos e zonas de emboscada. O mapa fornecido é impreciso e poderá conter informações erradas. O reconhecimento inicial é essencial para evitar armadilhas e patrulhas.
                        </Text>
                        <Text style={styles.subItem}>Identificação do V.I.P</Text>
                        <Text style={styles.list}>
                            • O V.I.P. será encontrado em uma das instalações-chave dentro da cidade. O sucesso da missão depende de localizar o prédio certo, utilizando inteligência e observação atenta.
                        </Text>
                        <Text style={styles.subItem}>Conflito e Riscos</Text>
                        <Text style={styles.list}>
                            • O inimigo está em alta concentração. Evite confrontos desnecessários, pois a missão não permite engajamentos prolongados. O uso estratégico de recursos, como silenciadores e movimentação furtiva, pode aumentar as chances de sucesso.
                        </Text>
                        <Text style={styles.subItem}>Extração</Text>
                        <Text style={styles.list}>
                            • Uma vez com o V.I.P. em mãos, a evacuação será crítica. Fique atento às condições climáticas e às possíveis barreiras ao longo do percurso. Decisões rápidas sobre qual veículo de evacuação utilizar serão essenciais.
                        </Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#FFF",
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        width: '100%',
        letterSpacing: 5,
    },
    subTitle: {
        color: colors.primary,
        fontWeight: "bold",
        paddingHorizontal: 10,
        marginBottom: 5,
        borderBottomWidth: 2,
        fontSize: 16,
        borderBottomColor: colors.primary
    },
    subItem: {
        color: colors.secondary,
        fontWeight: "bold",
        marginBottom: 5,
        borderBottomWidth: 2,
        fontSize: 12,
        borderBottomColor: colors.secondary
    },
    text: {
        color: "#FFF",
        fontSize: 14
    },
    list: {
        color: "#FFF",
        fontSize: 14,
        paddingLeft: 10,
        paddingBottom: 5
    },
    box: {
        flexDirection: 'column',
        paddingTop: 10,
        alignItems: 'flex-start',
        width: '100%',
    },
    subBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 20
    },
    bold: {
        fontWeight: 'bold'
    }
})