import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default function ExtractionTab() {

    return (
        <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }}>
            <View style={{ paddingBottom: 50 }}>

                <Text style={styles.title}>Extração</Text>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>1. Solicitação de Extração</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • A extração deve ser requisitada utilizando qualquer <Text style={styles.bold}>rádio fixo</Text>, encontrado no mapa.
                        </Text>
                        <Text style={styles.list}>
                            • A comunicação deve ser feita para o comando da ONIX, fornecendo a seguinte informação:
                        </Text>
                        <View style={styles.subBox}>
                            <Text style={[styles.list, styles.bold]}>
                                • Código de Identificação do operador
                            </Text>
                            <Text style={[styles.list, styles.bold]}>
                                •Solicitação de Helicóptero de Extração
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>2. Aguardar chegada</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Após a solicitação, o helicóptero levará <Text style={styles.bold}>5-10 minutos</Text> (no jogo) para chegar à área.
                        </Text>
                        <Text style={styles.list}>
                            • Durante esse tempo, a equipe pode preparar a área de extração ou posicionar-se estrategicamente para defesa.
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>3. Identificação do Helicóptero</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • O helicóptero pode ser identificado pelo som das hélices antes de ser visualizado.
                        </Text>
                        <Text style={styles.list}>
                            • A comunicação no rádio confirmará: <Text style={styles.bold}>“Equipe Extração aproximando. Confirmem o local do pouso.”</Text>
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>4. Uso do Sinalizador</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Para garantir que o helicóptero pouse na posição desejada, um <Text style={styles.bold}>sinalizador de fumaça.</Text>
                        </Text>
                        <Text style={styles.list}>
                            • Caso o sinalizador <Text style={styles.bold}>não seja usado</Text>, o piloto escolherá um local de pouso <Text style={styles.bold}>aleatório</Text>, possivelmente em terreno mais distante.
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>5. Condições para o Pouso</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Área Segura:</Text> O local deve estar livre de obstáculos, inimigos e ameaças.
                        </Text>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Clima:</Text> Tempestades de areia ou ventos fortes podem atrasar ou desviar o helicóptero.
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>6. Extração</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Assim que o helicóptero pousar, a equipe tem <Text style={styles.bold}>tempo limitado</Text> para embarcar antes que ameaças próximas forcem a decolagem.
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Notas</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Risco de Deslocamento:</Text> Se o helicóptero pousar em local aleatório, a equipe precisará se mover rapidamente, correndo maior risco de exposição a inimigos.
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