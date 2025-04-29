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
                        Infiltre-se na base avançada da Titan Dynamics no Ártico, agora sob controle dos remanescentes do Crimson First e do traidor Julian Falcon. Seu objetivo é destruir o P.E.M. de escala global antes que seja ativado. Elimine ou capture qualquer ameaça no caminho. A falha comprometerá a segurança mundial. Esta operação exige precisão, agilidade e estratégia.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Objetivo Primário</Text>
                    <Text style={styles.list}>
                        • Localizar e destruir o P.E.M de escala global.
                    </Text>
                    <Text style={styles.list}>
                        • Não causar o colapso da instalação.
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
                        • O terreno gélido pode comprometer a comunicação e os movimentos
                    </Text>
                    <Text style={styles.list}>
                        • O clima (nevasca) pode afetar a visibilidade e os equipamentos.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Aviso de Segurança</Text>
                    <Text style={styles.text}>
                        A missão se desenrola em território remoto. O inimigo está bem armado e preparado para resistir, com acesso a armamentos altamente perigosos dentro e fora da base. A comunicação com o comando será limitada a rádios individuais com alcance de até 100 metros.
                    </Text>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Diretrizes Operacionais:</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.subItem}>Entrada e Reconhecimento</Text>
                        <Text style={styles.list}>
                            • O local estará cheio de pontos críticos e zonas de emboscada. O reconhecimento inicial é essencial para evitar armadilhas e patrulhas.
                        </Text>
                        <Text style={styles.subItem}>Identificação do P.E.M</Text>
                        <Text style={styles.list}>
                            • O P.E.M será encontrado em uma das instalações-chave dentro da base avançada. O sucesso da missão depende de localizar e destruir o equipamento, utilizando inteligência e observação atenta.
                        </Text>
                        <Text style={styles.subItem}>Conflito e Riscos</Text>
                        <Text style={styles.list}>
                            • O inimigo está esperando sua chegada. Evite confrontos desnecessários, pois a missão não permite engajamentos prolongados. O uso estratégico de recursos, como silenciadores e movimentação furtiva, pode aumentar as chances de sucesso.
                        </Text>
                        <Text style={styles.subItem}>Extração</Text>
                        <Text style={styles.list}>
                            • Cumprindo a missão, a evacuação será crítica. Fique atento às condições climáticas e às possíveis barreiras ao longo do percurso. Decisões rápidas sobre qual veículo de evacuação utilizar serão essenciais.
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
        color: colors.lightGreen,
        fontWeight: "bold",
        paddingHorizontal: 10,
        marginBottom: 5,
        borderBottomWidth: 2,
        fontSize: 16,
        borderBottomColor: colors.lightGreen
    },
    subItem: {
        color: colors.waterGreen,
        fontWeight: "bold",
        marginBottom: 5,
        borderBottomWidth: 2,
        fontSize: 12,
        borderBottomColor: colors.waterGreen
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