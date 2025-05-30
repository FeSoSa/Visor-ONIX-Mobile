import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from '../../utils/colors';

export default function ItemsTab() {

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }} >
                    <View style={{ paddingBottom: 50 }}>
                        <Text style={styles.title}>Itens e Diversos</Text>

                        {//! --------------------------------- Coletes --------------------------------
                        }
                        <View style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Tabela de coletes</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de colete</Text>
                                    <Text style={styles.cell}>Resistência</Text>
                                    <Text style={styles.cell}>Bolsos</Text>
                                    <Text style={styles.cell}>Descrição</Text>
                                </View>
                                {[
                                    ['Colete improvisado', '12 de Dano', '', 'Criado a partir de uma placa de metal achado nos arredores, oferece alguma proteção em momentos urgentes.'],
                                    ['Colete leve', '20 de Dano', '4 Cartuchos e 1 granada', 'Ideal para mobilidade, oferece boa proteção contra armas de baixo calibre, mas frágil contra fuzis.'],
                                    ['Colete Médio', '32 de Dano', '5 Cartuchos e 2 granadas', 'Proteção balanceada, sendo eficaz contra fuzis de médio calibre, mas com limitação em impacto contínuo de fuzis pesados.'],
                                    ['Colete Pesado', '42 de Dano', '6 Cartuchos e 2 granadas', 'Focado em absorver impactos de alta intensidade, mas reduz a mobilidade. Ideal para enfrentamentos pesados.'],
                                    ['Traje Titan', '60 de Dano', '6 Cartuchos e 2 granadas', 'Um traje de combate avançado feito com titânio e fibra de carbono reforçada. Equipado com um exoesqueleto integrado, concede +1 em qualquer rolagem de teste, oferecendo força e precisão sobre-humanas no campo de batalha.'],
                                    ['Coleta Ultra-Pesado', '80 de Dano', '1 Cartucho', 'Extremamente pesado perdendo toda mobilidade, porém oferece proteção para todos tipos de calibre. Imune a calibres pequenos'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Granadas --------------------------------
                        }
                        <View style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Tabela de Granadas</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de granada</Text>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Dano</Text>
                                    <Text style={styles.cell}>Área de Efeito</Text>
                                    <Text style={styles.cell}>Descrição</Text>
                                </View>
                                {[
                                    ['Granada Explosiva', 'Dano explosivo', '1D20', '5 - 10m', 'Causa dano explosivo em área, afeta personagens na área de impacto.'],
                                    ['Granada de Fumaça', 'Ocultação', 'Nenhum', 'Até 10m', 'Cria uma nuvem de fumaça que obscurece a visão, útil para coberturas rápidas.'],
                                    ['Granada Flashbang', 'Cegueira', 'Nenhum', 'Até 4m', 'Causa cegueira temporária e desorientação nos inimigos próximos.'],
                                    ['Granada Sonora', 'Distração', 'Nenhum', '10m - 15m', 'Causa distrações sonoras no ambiente.'],
                                    ['Granada incendiária', 'Dano flamejante', '2D6', 'Até 6m', 'Causa dano flamejante em área, afeta personagens na área de impacto.'],
                                    ['Mini P.E.M', 'Desativar eletrônicos', 'Nenhum', 'Até 2m', 'Pulso eletromagnético de curto alcance que desativa eletrônicos em um pequeno raio.'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Itens --------------------------------
                        }
                        <View style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Tabela de itens</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Nome</Text>
                                    <Text style={styles.cell}>Descrição</Text>
                                </View>
                                {[
                                    ['Alimento', 'Recupera 1D6 pontos de vida.'],
                                    ['Kit Médico', 'Recupera 50% de vida.'],
                                    ['Analgésico', 'Reduz o dano recebido em 30% por 2 turnos.'],
                                    ['Injeção de adrenalina', 'Aumenta +2 na rolagem de algum aliado no próximo turno.'],
                                    ['Bandagem', 'Recupera 1D10 pontos de vida.'],
                                    ['Binóculos', 'Permite enxergar longas distâncias.'],
                                    ['Caixa de Munição', 'Recarrega até 5 cartuchos vazios fora de combate.'],
                                    ['Rádio Tático', 'Permite comunicação em um raio de até 100 metros.'],
                                    ['Placas Balísticas', 'Repara o colete até o nível médio, se possível.'],
                                    ['Sinalizador', 'Chama o helicóptero se estiver perto, mas também atrai inimigos.'],

                                    ['Máscara Tática de Gás', 'Filtra gases tóxicos e fumaça. Protege contra efeitos respiratórios.'],
                                    ['VitaFlux-R', 'Composto injetável que concede +30 de vida temporária.'],
                                    ['NanoDart-X', 'Lançador de mísseis miniaturizados acoplado ao braço. Capaz de atingir inimigos atrás de cobertura.'],
                                    ['Spectra-V', 'Óculos avançados que permitem visão clara em meio a fumaça, gás e neblina.'],
                                    ['Gancho Ascendente', 'Dispositivo portátil para escalada rápida em estruturas verticais.'],
                                    ['Balas Especiais', 'Munição de alto desempenho, superior à pesada. +2 de dano por bala.'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
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
        fontSize: 12
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
    unique: {
        fontWeight: 'bold',
        color: colors.lightGreen,
        fontSize: 16,
        paddingBottom: 10
    },
    row: {
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },
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
    aside: {
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    asideText: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 12
    },
    center: {
        fontWeight: 'bold',
        color: "#FFF",
        fontSize: 16,
        paddingLeft: 15
    },
    container: {
        backgroundColor: colors.gray,
    },
    rowTable: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingVertical: 8,
        alignItems: "center"
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        color: "#FFF",
    },
    header: {
        fontWeight: 'bold',
        backgroundColor: colors.lightGreen,
        paddingVertical: 10,
    },
})