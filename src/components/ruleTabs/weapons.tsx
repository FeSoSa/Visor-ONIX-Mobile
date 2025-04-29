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
        sec13: useRef<View>(null),
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
                        <Text style={styles.asideText}>Desert Eagle / Taurus</Text>
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
                        onPress={() => scrollToSection('sec13')}>
                        <Text style={styles.asideText}>Browning Bar MK3</Text>
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
                                    • <Text style={styles.bold}>Penetração baixa</Text>, ideal para alvos com pouca ou nenhuma armadura.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre Médio
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Penetração média</Text>, permitindo que atravesse armaduras leves ou blindagem.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre intermediário
                                </Text>
                                <Text style={styles.list}>
                                    • Ideal para causar grandes danos a curta distância.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Alta penetração</Text>, capaz de perfurar armadura pesada quando usado a queima-roupa.
                                </Text>
                                <Text style={styles.subItem}>
                                    Calibre Pesado
                                </Text>
                                <Text style={styles.list}>
                                    • Ideal para causar grandes danos em alvos mais resistentes.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Alta penetração</Text>, capaz de perfurar quase qualquer armadura ou blindagem.
                                </Text>
                                <Text style={styles.subItem}>
                                    Munição Explosiva
                                </Text>
                                <Text style={styles.list}>
                                    • Uma munição de grande poder explosivo, ideal para destruir alvos e causar grandes danos em área.
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
                                <Text style={styles.center}>Tipo de Bala (Dano Bônus)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de Calibre</Text>
                                    <Text style={styles.cell}>Pequeno</Text>
                                    <Text style={styles.cell}>Médio</Text>
                                    <Text style={styles.cell}>Tambor</Text>
                                    <Text style={styles.cell}>Pesado</Text>
                                    <Text style={styles.cell}>Explosivo</Text>
                                </View>
                                {[
                                    ['Dano', '2', '4', '6', '20', '30'],
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
                                    ['Tipo de Calibre', 'Pequeno'],
                                    ['Dano base', '2'],
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
                                    ['Tipo de Calibre', 'Médio'],
                                    ['Dano base', '3'],
                                    ['Penetração', 'Média'],
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
                                    ['Tipo de Calibre', 'Médio'],
                                    ['Dano base', '5'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '24 balas'],
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
                                    ['Tipo de Calibre', 'Pesado'],
                                    ['Dano base', '20'],
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
                        {//! --------------------------------- Browning Bar MK3 --------------------------------
                        }
                        <View ref={sectionRefs.sec13} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Browning Bar MK3 (Rifle)</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Calibre', 'Pesado'],
                                    ['Dano base', '5'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '7 balas'],
                                    ['Disparo', 'Semi-Automático'],
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
                                    ['Tipo de Calibre', 'Médio'],
                                    ['Dano base', '4'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade do Cartucho', '25 balas'],
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
                                    ['Tipo de Calibre', 'Pequeno'],
                                    ['Dano base', '3'],
                                    ['Penetração', 'Baixa'],
                                    ['Capacidade do Cartucho', '30 balas'],
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
                                    ['Tipo de Calibre', 'Médio'],
                                    ['Dano base', '4'],
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
                                    ['Tipo de Calibre', 'Tambor'],
                                    ['Dano base', '7'],
                                    ['Penetração', 'Média'],
                                    ['Capacidade', '8 cartuchos'],
                                    ['Disparo', 'Dispersão'],
                                    ['Observação', 'A shotgun não usa cartuchos de munição no colete e sim balas avulsas, cada capacidade de cartucho no colete é equivalente a 8 balas'],
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
                                    ['Tipo de Calibre', 'Explosiva'],
                                    ['Dano base', '15'],
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
                                    ['Tipo de Calibre', 'Pesado'],
                                    ['Dano base', '25'],
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
                        {//! --------------------------------- Railgun --------------------------------
                        }
                        <View style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Railgun</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Atributo</Text>
                                    <Text style={styles.cell}>Valor</Text>
                                </View>
                                {[
                                    ['Tipo de Calibre', 'Elétrico'],
                                    ['Dano base', '60'],
                                    ['Penetração', 'Muito Alta'],
                                    ['Capacidade do Cartucho', '2 cargas'],
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
                                    ['Scope Acog (4x)', '+2'],
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