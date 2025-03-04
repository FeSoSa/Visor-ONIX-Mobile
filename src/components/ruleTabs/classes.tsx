import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';

const { width } = Dimensions.get('screen');
export default function ClassTab() {
    const scrollRef = useRef<ScrollView>(null);
    const sectionRefs = {
        sec1: useRef<View>(null),
        sec2: useRef<View>(null),
        sec3: useRef<View>(null),
        sec4: useRef<View>(null),
        sec5: useRef<View>(null),
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
                        <Text style={styles.asideText}>Assalto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec2')}>
                        <Text style={styles.asideText}>Sniper</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec3')}>
                        <Text style={styles.asideText}>Engenheiro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec4')}>
                        <Text style={styles.asideText}>Médico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec5')}>
                        <Text style={styles.asideText}><Text style={styles.bold}>Inteligência</Text></Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }} ref={scrollRef}>
                    <View style={{ paddingBottom: 50 }}>
                        <Text style={styles.title}>Classe</Text>

                        {//! --------------------------------- Assalto --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec1}>
                            <Text style={styles.subTitle}>
                                Assalto
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    A classe Assalto é a principal força ofensiva da equipe, projetada para confrontos diretos e combates em curta e média distância. Equipados com rifles automáticos e alto poder de fogo, os soldados de Assalto lideram as investidas e sustentam a pressão sobre o inimigo, dominando o campo de batalha com mobilidade e versatilidade.
                                </Text>
                                <Text style={styles.subItem}>
                                    Atributos
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Força</Text>: 14
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Destreza</Text>: 12
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Inteligência</Text>: 10
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Constituição</Text>: 24
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Percepção</Text>: 11
                                </Text>

                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Ataque Rápido: Permite disparar duas vezes em um único turno, uma vez por combate.
                                </Text>
                                <Text style={styles.list}>
                                    • Perito: Concede um bônus de +2 em rolagens para ataque ou defesa em combate corpo a corpo (até 1,5 m).
                                </Text>
                                <Text style={styles.list}>
                                    • Adrenalina: Ao atingir um valor natural de +18 em dois turnos consecutivos, o próximo ataque é crítico automaticamente.
                                </Text>
                                <Text style={styles.list}>
                                    • Ainda não: Em estado quase morte, consegue se levantar sozinho e todas suas habilidades são recarregadas. Utilizavel uma única vez no jogo, após uso o operador desmaia.
                                </Text>
                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Fuzil de Assalto M4A1 – Rifle automático com alta cadência de tiro, ideal para combates em média distância.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Pistola Glock
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Colete Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Caixa de Munição: Permite carregar até 6 cartuchos vazios fora de combate.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 50 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- Sniper --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec2}>
                            <Text style={styles.subTitle}>
                                Sniper
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    A classe Sniper é a especialista em eliminar alvos de longo alcance com precisão cirúrgica. Suas habilidades em camuflagem, visão avançada e paciência tornam o Sniper uma peça-chave para suporte estratégico, neutralizando ameaças antes que o inimigo perceba sua presença.
                                </Text>
                                <Text style={styles.subItem}>
                                    Atributos
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Força</Text>: 8
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Destreza</Text>: 16
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Inteligência</Text>: 14
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Constituição</Text>: 20
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Percepção</Text>: 18
                                </Text>

                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Prender Respiração: Concede um bônus de +2 na rolagem do próximo ataque, consumindo uma ação principal.
                                </Text>
                                <Text style={styles.list}>
                                    • Camuflagem: Permite ao Sniper se esconder no ambiente, ficando indetectável por inimigos em áreas específicas por até 3 turnos.
                                </Text>
                                <Text style={styles.list}>
                                    • Olhos de Águia: Garante +1 na rolagem ao mirar em alvos a mais de 100 metros de distância.
                                </Text>
                                <Text style={styles.list}>
                                    • Astuto: Consegue trocar de arma sem gastar movimentos.
                                </Text>
                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Sniper Barret M82 – Ideal para disparos letais ou para incapacitar alvos a longa distância.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Desert Eagle – Pistola potente, excelente em confrontos próximos.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Colete Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Binóculos: Permite identificar e localizar inimigos em áreas distantes.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 50 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- Engenheiro --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec3}>
                            <Text style={styles.subTitle}>
                                Engenheiro
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    O Engenheiro é o especialista técnico da equipe, com habilidades para reparar veículos, desarmar explosivos e criar armadilhas. Também possui armamento tático para destruição estratégica, garantindo suporte essencial em operações técnicas e logísticas.
                                </Text>
                                <Text style={styles.subItem}>
                                    Atributos
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Força</Text>: 12
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Destreza</Text>: 13
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Inteligência</Text>: 15
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Constituição</Text>: 20
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Percepção</Text>: 11
                                </Text>

                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Placas Extras: Carrega duas placas balísticas médias, disponíveis para reposição nos coletes da equipe durante o combate.
                                </Text>
                                <Text style={styles.list}>
                                    • Improviso: Consegue criar placas balísticas improvisadas com matérias das redondezas e reparar coisas(D20 | +10)
                                </Text>
                                <Text style={styles.list}>
                                    • Lança-Granadas: Equipamento compacto com 2 cargas de alto poder explosivo.
                                </Text>
                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Submetralhadoras KRISS Vector ou Uzi
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Pistola Glock
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Colete Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Kit de ferramentas, sinalizador, Lança-Granadas compacto.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 50 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- Médico --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec4}>
                            <Text style={styles.subTitle}>
                                Médico
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    O Médico é responsável por manter a equipe viva em situações críticas. Especialista em curar ferimentos, estabilizar aliados e fornecer suporte em campo, essa classe é indispensável para o sucesso da missão.
                                </Text>
                                <Text style={styles.subItem}>
                                    Atributos
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Força</Text>: 10
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Destreza</Text>: 11
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Inteligência</Text>: 14
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Constituição</Text>: 16
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Percepção</Text>: 13
                                </Text>

                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Injeção de adrenalina: Aumenta +1 na rolagem de algum aliado por 2 turnos. 1 vez por combate
                                </Text>
                                <Text style={styles.list}>
                                    • Kit Médico: Recupera 80% da vida de um aliado, utilizável 1 vez por combate.
                                </Text>
                                <Text style={styles.list}>
                                    • Estabilizar Feridos: Previne a morte de um aliado gravemente ferido, permitindo que ele lute por mais 3 turnos.
                                </Text>
                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Submetralhadora MP5
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Pistola Glock
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Colete Pesado– Oferece maior mobilidade, com espaço para kits médicos.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Kit de Primeiros Socorros, morfina, desfibrilador.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 50 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- >Inteligência --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec5}>
                            <Text style={styles.subTitle}>
                                <Text style={styles.bold}>Inteligência</Text>
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    A classe <Text style={styles.bold}>Inteligência</Text> atua como o centro de planejamento e análise tática da equipe. Com habilidades para hackear sistemas, monitorar movimentos e criar distrações estratégicas, é essencial para evitar emboscadas e garantir vantagens táticas.
                                </Text>
                                <Text style={styles.subItem}>
                                    Atributos
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Força</Text>: 8
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Destreza</Text>: 12
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Inteligência</Text>: 17
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Constituição</Text>: 20
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Percepção</Text>: 15
                                </Text>

                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Hackear Sistemas: Permite invadir sistemas inimigos, desativar câmeras ou abrir portas (sucesso: +12 no D20).
                                </Text>
                                <Text style={styles.list}>
                                    • Drone de Reconhecimento: Escaneia uma área para identificar e marcar inimigos escondidos em até 20m.
                                </Text>
                                <Text style={styles.list}>
                                    • Distração Sonora: Utiliza um dispositivo para criar ruídos em até 10 metros, confundindo os inimigos.
                                </Text>
                                <Text style={styles.list}>
                                    • Silenciador: Sua arma secundária da +2 na rolagem em ataques onde o inimigo não percebeu sua presença
                                </Text>
                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Shotgun Gauge12.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> USP Silenciada.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Colete Leve – Projetado para transportar dispositivos eletrônicos.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Laptop de invasão, bomba sonora, drone de vigilância e sinalizador.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 50 metros.
                                </Text>
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