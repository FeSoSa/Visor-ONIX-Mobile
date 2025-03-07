import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('screen');
export default function WeaponTab() {
    const scrollRef = useRef<ScrollView>(null);
    const sectionRefs = {
        sec1: useRef<View>(null),
        sec2: useRef<View>(null),
        sec3: useRef<View>(null),
        sec4: useRef<View>(null),
        sec5: useRef<View>(null),
        sec6: useRef<View>(null),
        sec7: useRef<View>(null),
        sec8: useRef<View>(null),
        sec9: useRef<View>(null),
        sec10: useRef<View>(null),
        sec11: useRef<View>(null),
        sec12: useRef<View>(null),
    };

    const scrollToSection = (section: keyof typeof sectionRefs) => {
        sectionRefs[section].current?.measureLayout(scrollRef.current as any, (_x, y) => {
            scrollRef.current?.scrollTo({ y, animated: true });
        });
    };
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: width * 0.12, backgroundColor: colors.gray, borderRightWidth: 8 }}>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec1')}>
                        <Text style={styles.asideText}>Dano</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec2')}>
                        <Text style={styles.asideText}>Glock / USP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec3')}>
                        <Text style={styles.asideText}>Desert Eagle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec4')}>
                        <Text style={styles.asideText}>M4A1 / AK-47</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec5')}>
                        <Text style={styles.asideText}>Barret M82 / AWP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec6')}>
                        <Text style={styles.asideText}>MP5 / Uzi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec12')}>
                        <Text style={styles.asideText}>KRISS Vector</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec7')}>
                        <Text style={styles.asideText}>M60</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec8')}>
                        <Text style={styles.asideText}>12 Gauge</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec9')}>
                        <Text style={styles.asideText}>Lança Granadas Compacto / RPG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec10')}>
                        <Text style={styles.asideText}>Canhão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec11')}>
                        <Text style={styles.asideText}>Mira</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }} ref={scrollRef}>
                    <View style={{ paddingBottom: 50 }}>
                        <Text style={styles.title}>Armas</Text>
                        <View style={styles.box}>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Calibre Pequeno
                                </Text>
                                <Text style={styles.list}>
                                    • Dano fixo de <Text style={styles.bold}>3</Text>. Esse tipo de bala é eficaz em alvos menos blindados, causando dano moderado.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Penetração baixa</Text>, ideal para alvos com pouca ou nenhuma armadura.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre Médio
                                </Text>
                                <Text style={styles.list}>
                                    • Dano fixo de <Text style={styles.bold}>6</Text>, um pouco mais alto que o calibre pequeno.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Penetração média</Text>, permitindo que atravesse armaduras leves ou blindagem.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre intermediário
                                </Text>
                                <Text style={styles.list}>
                                    • Dano fixo de <Text style={styles.bold}>8</Text>, ideal para causar grandes danos a curta distância.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Alta penetração</Text>, capaz de perfurar armadura pesada quando usado a queima-roupa.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre Pesado
                                </Text>
                                <Text style={styles.list}>
                                    • Dano fixo de <Text style={styles.bold}>32</Text>, ideal para causar grandes danos em alvos mais resistentes.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Alta penetração</Text>, capaz de perfurar quase qualquer armadura ou blindagem.
                                </Text>
                                <Text style={styles.subItem}>
                                    Munição Explosiva
                                </Text>
                                <Text style={styles.list}>
                                    • Dano fixo de <Text style={styles.bold}>42</Text>, uma munição de grande poder explosivo, ideal para destruir alvos e causar grandes danos em área.
                                </Text>
                                <Text style={styles.list}>
                                    • A <Text style={styles.bold}>alta penetração</Text> torna esta munição capaz de destruir veículos ou alvos fortemente blindados.
                                </Text>
                            </View>
                        </View>


                        <Text style={styles.title}>Tabela de armas</Text>
                        {//! --------------------------------- Glock --------------------------------
                        }
                        <View ref={sectionRefs.sec1} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Tipo de Bala (Dano Fixo)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de Munição</Text>
                                    <Text style={styles.cell}>Calibre Pequeno</Text>
                                    <Text style={styles.cell}>Calibre Médio</Text>
                                    <Text style={styles.cell}>Calibre intermediário</Text>
                                    <Text style={styles.cell}>Calibre Pesado</Text>
                                    <Text style={styles.cell}>Munição Explosiva</Text>
                                </View>
                                {[
                                    ['Dano', '3', '6', '8', '32', '42'],
                                    ['Penetração', 'Baixa', 'Media', 'Alta', 'Alta', 'Alta'],
                                    ['Tipo de Dano', 'Perfuração', 'Perfuração', 'Perfuração', 'Perfuração', 'Explosivo'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Glock --------------------------------
                        }
                        <View ref={sectionRefs.sec2} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Glock / USP (Pistola Comum)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Pequeno'],
                                    ['Penetração', 'Baixa'],
                                    ['Capacidade do Cartucho', '10 balas'],
                                    ['Disparo', 'Semi-automático'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Desert Eagle --------------------------------
                        }
                        <View ref={sectionRefs.sec3} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Desert Eagle (Pistola de Elite)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Médio'],
                                    ['Penetração', 'Alta'],
                                    ['Capacidade do Cartucho', '7 balas'],
                                    ['Disparo', 'Semi-automático'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- M4A1 --------------------------------
                        }
                        <View ref={sectionRefs.sec4} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>M4A1 / AK-47 (Rifle de Assalto)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Médio'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '24 balas'],
                                    ['Disparo', 'Automático '],
                                    ['Modificador (AK-47)', '+1 '],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Barret M82 --------------------------------
                        }
                        <View ref={sectionRefs.sec5} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Barret M82 / AWP (Sniper)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Pesado'],
                                    ['Penetração', 'Alta'],
                                    ['Capacidade do Cartucho', '7 balas'],
                                    ['Disparo', 'Único'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- KRISS Vector --------------------------------
                        }
                        <View ref={sectionRefs.sec12} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>KRISS Vector (Submetralhadora)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Pequeno'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '25 balas'],
                                    ['Disparo', 'Automático '],
                                    ['Modificador', '+1 '],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- MP5 --------------------------------
                        }
                        <View ref={sectionRefs.sec6} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>MP5 / Uzi (Submetralhadora)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Pequeno'],
                                    ['Penetração', 'Baixa'],
                                    ['Capacidade do Cartucho', '30 balas'],
                                    ['Disparo', 'Automático '],
                                    ['Modificador (Uzi)', '-1 '],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- M60 --------------------------------
                        }
                        <View ref={sectionRefs.sec7} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>M60 (Metralhadora Pesada)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Médio'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '80 balas'],
                                    ['Disparo', 'Automático '],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- 12 Gauge --------------------------------
                        }
                        <View ref={sectionRefs.sec8} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>12 Gauge (Shotgun)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Cartuchos de Chumbo'],
                                    ['Penetração', 'Média (curta distância)'],
                                    ['Capacidade', '8 cartuchos'],
                                    ['Disparo', 'Tiros únicos (dispersão)'],
                                    ['Observação', 'A shotgun não usa cartuchos em munição no colete e sim carrega balas avulsas, cada capacidade de cartucho no colete é equivalente a 8 balas'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Lança-Granadas --------------------------------
                        }
                        <View ref={sectionRefs.sec9} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Lança-Granadas Compacto / RPG</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Explosiva'],
                                    ['Penetração', 'Alta'],
                                    ['Capacidade do Cartucho', '1 Granada especial'],
                                    ['Disparo', 'Único '],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Canhão --------------------------------
                        }
                        <View ref={sectionRefs.sec10} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Canhão</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Munição', 'Calibre Pesado'],
                                    ['Penetração', 'Muito Alta'],
                                    ['Capacidade do Cartucho', '3 balas'],
                                    ['Disparo', 'Único'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Lança-Granadas --------------------------------
                        }
                        <View ref={sectionRefs.sec11} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Modificadores de Mira</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de Mira</Text>
                                    <Text style={styles.cell}>Modificador de Precisão</Text>
                                </View>
                                {[
                                    ['Scope Acog (2x)', '+1'],
                                    ['Scope Acog (4x)', '+1.5'],
                                    ['Scope Termal', '+2 '],
                                    ['Scope de Sniper (12x)', 'Exclusivo para Sniper'],
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
        color: colors.primary,
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
        backgroundColor: colors.primary,
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
        backgroundColor: colors.primary,
        paddingVertical: 10,
    },
})