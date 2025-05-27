import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('screen');
export default function PrecisionTab() {
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
                        <Text style={styles.asideText}>Pistola</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec2')}>
                        <Text style={styles.asideText}>Shotgun</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec3')}>
                        <Text style={styles.asideText}>Rifle de Assalto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec4')}>
                        <Text style={styles.asideText}>Submetralhadora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec5')}>
                        <Text style={styles.asideText}>Metralhadora Pesada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec11')}>
                        <Text style={styles.asideText}>Escudo blindado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec6')}>
                        <Text style={styles.asideText}>Sniper de Alto Calibre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec12')}>
                        <Text style={styles.asideText}>Rifle de caça</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec7')}>
                        <Text style={styles.asideText}>Canhão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec8')}>
                        <Text style={styles.asideText}>Faca</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec9')}>
                        <Text style={styles.asideText}>Cobertura</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec10')}>
                        <Text style={styles.asideText}>Visibilidade</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }} ref={scrollRef}>
                    <View style={{ paddingBottom: 50 }}>
                        <Text style={styles.title}>Sistema de Precisão</Text>
                        <Text style={styles.text}>Para realizar um ataque, o jogador rola um <Text style={styles.bold}>D20</Text> e soma o valor da <Text style={styles.bold}>Habilidade de Mira</Text>h. O resultado final define quantos tiros acertaram o alvo e se o acerto foi fatal ou não. Modificadores são aplicados dependendo de fatores como distância, cobertura, visibilidade e condições ambientais.</Text>
                        <View style={styles.box}>
                            <Text style={styles.subTitle}>
                                Explicação:
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Tabela de Precisão
                                </Text>
                                <Text style={styles.list}>
                                    • Determina o número de acertos e erros com base na rolagem de D20 somada à habilidade de mira. Dependendo do resultado da rolagem, a quantidade de acertos (balas que atingem o alvo) pode ser maior ou menor, e há também um número de balas que podem ser perdidas (erros).
                                </Text>
                                <Text style={styles.subItem}>
                                    Tabela de Alcance
                                </Text>
                                <Text style={styles.list}>
                                    • Especifica como o alcance afeta a rolagem do dado. Se a distância da mira estiver além do alcance efetivo da arma, modificadores são aplicados para reduzir a precisão (penalização nas rolagens do D20).
                                </Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.subTitle}>
                                Tiro Fatal e Tiro Letal
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Tiro Fatal
                                </Text>
                                <Text style={styles.list}>
                                    • Um <Text style={styles.bold}>tiro fatal</Text> é aquele que resulta na morte imediata do alvo. Ele ocorre quando um ataque atinge uma área vital, como a cabeça ou o coração, causando danos irreparáveis. Esse tipo de tiro é decisivo e não há possibilidade de sobrevivência para o alvo.
                                </Text>
                                <Text style={styles.subItem}>
                                    Tiro Letal
                                </Text>
                                <Text style={styles.list}>
                                    • Um <Text style={styles.bold}>tiro letal</Text> não resulta na morte imediata, mas causa danos graves o suficiente para deixar o alvo <Text style={styles.bold}>caído ou imobilizado</Text>. O alvo ficará fora de combate, geralmente sangrando e incapacitado, mas poderá ser resgatado ou tratado por outros. Esse tipo de tiro pode resultar em ferimentos severos que requerem cuidados médicos urgentes, mas o alvo não morrerá imediatamente a menos que não seja tratado.
                                </Text>
                            </View>
                            <Text style={styles.list}>
                                • Caso o valor do dano do tiro de um valor quebrado, arredonde para menos.
                            </Text>
                        </View>
                        <Text style={styles.title}>Tabela de precisão de armas</Text>
                        {//! --------------------------------- Pistola --------------------------------
                        }
                        <View ref={sectionRefs.sec1} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Pistola</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 5', '0', '4'],
                                    ['6 - 10', '1', '3'],
                                    ['11 - 15', '2', '2'],
                                    ['16 - 19', '3', '1'],
                                    ['20', '1 letal + rolagem de finalização (exceto eagle e taurus)', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Até 10m', 'Alcance normal, sem penalidade'],
                                        ['10m - 15m', 'Alcance reduzido: -1 na rolagem'],
                                        ['Mais de 15m', 'Alcance reduzido: -2 na rolagem'],
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
                        {//! --------------------------------- Shotgun --------------------------------
                        }
                        <View ref={sectionRefs.sec2} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Shotgun</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 5', '0', '6'],
                                    ['6 - 10', '2', '4'],
                                    ['11 - 15', '3', '3'],
                                    ['16 - 19', '4', '2'],
                                    ['20', '1 Fatal', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Menos de 5m', 'Alcance aumentado, +1 na rolagem'],
                                        ['6m - 10m', 'Alcance normal, sem penalidade'],
                                        ['11m - 15m', 'Alcance reduzido: -1 na rolagem'],
                                        ['Mais de 15m', 'Alcance reduzido: -2 na rolagem'],
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
                        {//! --------------------------------- Rifle de Assalto --------------------------------
                        }
                        <View ref={sectionRefs.sec3} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Rifle de Assalto</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 5', '0', '8'],
                                    ['6 - 9', '2', '6'],
                                    ['10 - 14', '4', '5'],
                                    ['15 - 17', '5', '3'],
                                    ['18 - 19', '6', '2'],
                                    ['20', '1 Fatal (HS)', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Até 20m', 'Alcance normal, sem penalidade'],
                                        ['20m - 30m', 'Alcance reduzido: -1 na rolagem'],
                                        ['Mais de 30m', 'Alcance reduzido: -2 na rolagem'],
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
                        {//! --------------------------------- Submetralhadora --------------------------------
                        }
                        <View ref={sectionRefs.sec4} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Submetralhadora</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 5', '0', '10'],
                                    ['6 - 10', '5', '5'],
                                    ['11 - 15', '6', '4'],
                                    ['16 - 19', '8', '2'],
                                    ['20', '10', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View ref={sectionRefs.sec5}>
                                    <Text style={{ backgroundColor: "#000", padding: 5, color: "#FFF", textAlign: "center", fontWeight: "bold" }}>Submetralhadora Pesada</Text>
                                </View>

                                {[
                                    ['1 - 5', '0', '16'],
                                    ['6 - 9', '5', '11'],
                                    ['10 - 15', '7', '9'],
                                    ['16 - 17', '9', '7'],
                                    ['18 - 19', '11', '5'],
                                    ['20', '16', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}

                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Até 10m', 'Alcance normal, sem penalidade'],
                                        ['11 - 20m', 'Alcance reduzido: -1 na rolagem'],
                                        ['Mais de 20m', 'Alcance reduzido: -2 na rolagem'],
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
                        {//! --------------------------------- Escudo blindado --------------------------------
                        }
                        <View ref={sectionRefs.sec11} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Escudo blindado </Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Defesa do Calibre</Text>
                                    <Text style={styles.cell}>Rolagem (D20)</Text>
                                </View>
                                {[
                                    ['Pequeno', '+5'],
                                    ['Médio', '+12'],
                                    ['Intermediário', '+14'],
                                    ['Pesado', '+16'],
                                    ['Explosivo', '+18'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Sniper --------------------------------
                        }
                        <View style={{ marginBottom: 15 }} ref={sectionRefs.sec6}>
                            <View >
                                <Text style={styles.center}>Sniper</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 9', '0', '1'],
                                    ['10 - 16', '1 tiro  |  D/2', '0'],
                                    ['17 - 19', '1 tiro letal', '0'],
                                    ['20', '1 Fatal (HS)', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View ref={sectionRefs.sec7}>
                                    <Text style={{ backgroundColor: "#000", padding: 5, color: "#FFF", textAlign: "center", fontWeight: "bold" }}>Canhão</Text>
                                </View>

                                {[
                                    ['1 - 8', '0', '1'],
                                    ['9 - 13', '1 Tiro / 2', '0'],
                                    ['14 - 16', '1 Tiro letal', '0'],
                                    ['17 - 20', '1 Tiro fatal', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Até 15m', 'Alcance reduzido: -3 na rolagem'],
                                        ['15 - 49', 'Alcance reduzido: -1 na rolagem'],
                                        ['50m - 99m', 'Alcance normal, sem penalidade'],
                                        ['Mais de 100', 'Alcance aumentado: +1 na rolagem'],
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
                        {//! --------------------------------- Rifle de Caça --------------------------------
                        }
                        <View ref={sectionRefs.sec12} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Rifle de Caça</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Acertos</Text>
                                    <Text style={styles.cell}>Erros (Balas Perdida)</Text>
                                </View>
                                {[
                                    ['1 - 5', '0', '3'],
                                    ['6 - 10', '1', '2'],
                                    ['11 - 15', '2', '1'],
                                    ['16 - 19', '3', '0'],
                                    ['20', '4', '0'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                                <View style={styles.container}>
                                    {/* Cabeçalho da Tabela */}
                                    <View style={[styles.rowTable, styles.header]}>
                                        <Text style={styles.cell}>Distância</Text>
                                        <Text style={styles.cell}>Modificadores de Alcance</Text>
                                    </View>
                                    {[
                                        ['Menos de 5m', 'Alcance reduzido: -2 na rolagem'],
                                        ['6m - 11m', 'Alcance normal, sem penalidade'],
                                        ['12m - 20m', 'Alcance aumentado: +2 na rolagem'],
                                        ['21m - 40m', 'Alcance normal, sem penalidade'],
                                        ['Mais de 40m', 'Alcance reduzido: -2 na rolagem'],
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
                        {//! --------------------------------- Railgun --------------------------------
                        }
                        <View style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Railgun</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Resultado</Text>
                                </View>
                                {[
                                    ['0 - 12m', 'Sem sucesso'],
                                    ['13 - 20m', 'Sucesso'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}

                            </View>
                        </View>
                        {//! --------------------------------- Faca --------------------------------
                        }
                        <View ref={sectionRefs.sec8} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Faca</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Rolagem (D20 + Mira)</Text>
                                    <Text style={styles.cell}>Resultado</Text>
                                </View>
                                {[
                                    ['0 - 14', 'Sem sucesso'],
                                    ['15 - 17', 'Letal'],
                                    ['18 - 20', 'Fatal'],
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}

                            </View>
                        </View>
                        {//! --------------------------------- Cobertura --------------------------------
                        }
                        <View ref={sectionRefs.sec9} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Modificadores por Cobertura</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Tipo de Cobertura</Text>
                                    <Text style={styles.cell}>Modificador na Rolagem</Text>
                                </View>
                                {[
                                    ['Sem Cobertura', 'Nenhum'],
                                    ['Cobertura Leve (Ex: parede baixa)', '-2'],
                                    ['Cobertura Média (Ex: carro, estrutura média)', '-4'],
                                    ['Cobertura Pesada (Ex: muro de concreto)', '-6']
                                ].map((row, index) => (
                                    <View key={index} style={styles.rowTable}>
                                        {row.map((cell, i) => (
                                            <Text key={i} style={[styles.cell]}>{cell}</Text>
                                        ))}
                                    </View>
                                ))}
                            </View>
                        </View>
                        {//! --------------------------------- Visibilidade --------------------------------
                        }
                        <View ref={sectionRefs.sec10} style={{ marginBottom: 15 }}>
                            <View >
                                <Text style={styles.center}>Modificadores por Visibilidade</Text>
                            </View>
                            <View style={styles.container}>
                                {/* Cabeçalho da Tabela */}
                                <View style={[styles.rowTable, styles.header]}>
                                    <Text style={styles.cell}>Condição de Visibilidade</Text>
                                    <Text style={styles.cell}>Modificador na Rolagem</Text>
                                </View>
                                {[
                                    ['Sem Cobertura', 'Nenhum'],
                                    ['Baixa Visibilidade (Ex: escuro ou fumaça leve)', '-2'],
                                    ['Visibilidade Crítica (Ex: tempestades de areia ou névoa densa)', '-4'],
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