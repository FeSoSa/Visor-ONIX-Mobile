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
        sec6: useRef<View>(null),
        sec7: useRef<View>(null),
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
                        onPress={() => scrollToSection('sec6')}>
                        <Text style={styles.asideText}>Caçador</Text>
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
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => scrollToSection('sec7')}>
                        <Text style={styles.asideText}><Text style={styles.bold}>Vanguarda</Text></Text>
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
                                    • Visor adaptativo: Imune a efeitos de flashbangs e luz intensa. Quando uma granada de luz explode por perto, recebe +2 de vantagem no próximo ataque.
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
                                    • <Text style={styles.bold}>Colete:</Text> Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Caixa de Munição: Permite carregar até 6 cartuchos vazios fora de combate.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
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
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Prender Respiração: Concede um bônus de +2 na rolagem do próximo ataque, consumindo uma ação principal.
                                </Text>
                                <Text style={styles.list}>
                                    • Camuflagem: Permite ao Sniper se esconder em estruturas, ficando indetectável por inimigos em áreas específicas por até 3 turnos.
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
                                    • <Text style={styles.bold}>Colete:</Text> Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Binóculos: Permite identificar e localizar inimigos em áreas distantes.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- Caçador --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec6}>
                            <Text style={styles.subTitle}>
                                Caçador
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    O Caçador é capaz de rastrear inimigos e manipular o campo de batalha com a ajuda de seu lobo. Mesmo com poder de fogo limitado, sua sinergia com o pet permite distrações, sangramentos e ataques precisos à distância.
                                </Text>
                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Sangue frio: Concede um bônus de +1 na rolagem do próximo ataque, consumindo uma ação principal.
                                </Text>
                                <Text style={styles.list}>
                                    • Camuflagem: Permite ao Sniper se esconder no meio ambiente, ficando indetectável por inimigos por até 3 turnos.
                                </Text>
                                <Text style={styles.list}>
                                    • Controle do Lobo: Pode comandar o Lobo para agir de maneira tática (20 HP)
                                </Text>

                                <View style={styles.subBox}>
                                    <Text style={styles.list}>• Mordida: Causa dano fixo 1d6, com chance de Sangramento na segunda mordida (+10 no 1d20).</Text>
                                    <Text style={styles.list}>• Distração: Força o inimigo a rolar com desvantagem para desviar no próximo turno. 1 vez a cada 2 turnos.</Text>
                                    <Text style={styles.list}>• Rastrear: Localiza inimigos ou pegadas recentes.</Text>
                                    <Text style={styles.list}>• <Text style={styles.bold}>Sangramento:</Text> Aplica sangramento (1d4 por 3 turnos); seus inimigos causam +2 de dano no alvo.</Text>
                                    <Text style={styles.list}>• <Text style={styles.bold}>Observação:</Text> O Lobo é frágil, com vida baixa. Se ferido, recua por 2 turnos e não pode ser curado em combate.</Text>
                                </View>

                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Rifle Browning Bar Mk3
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Nenhuma
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    •  <Text style={styles.bold}>Equipamentos Extras:</Text> Sinalizador, ração e roupa de camuflagem.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
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
                                <Text style={styles.list}>
                                    • Olhar Analítico: Usa seu conhecimento técnico para analisar estruturas, equipamentos, veículos ou armas pesadas, identificando falhas ou pontos fracos.
                                </Text>
                                <View style={styles.subBox}>
                                    <Text style={styles.list}>• Se tirar +10, recebe +2 de rolagem ao atacar o alvo analisado (por 2 turnos). 1 vez por combate
                                    </Text>
                                    <Text style={styles.list}>• Só pode ser usada contra alvos mecânicos, blindados ou estruturas.
                                    </Text>
                                </View>
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
                                    • <Text style={styles.bold}>Colete:</Text> Médio – Equilíbrio entre proteção e mobilidade, capaz de resistir a rajadas de fuzil.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Kit de ferramentas, sinalizador, Lança-Granadas compacto.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
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
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Injeção de adrenalina: Aumenta +2 na rolagem de algum aliado no próximo turno. 1 vez por combate
                                </Text>
                                <Text style={styles.list}>
                                    • Kit Médico: Recupera 80% da vida de um aliado. Recarrega após 3 turnos
                                </Text>
                                <Text style={styles.list}>
                                    • Analgésico: Reduz 30% do dano recebido por um aliado ou por si mesmo no próximo ataque. 1 vez por combate
                                </Text>
                                <Text style={styles.list}>
                                    • Conhecimento do Corpo: Usa seu conhecimento anatômico para atacar pontos críticos. Recarrega após 3 turnos.
                                </Text>
                                <View style={styles.subBox}>
                                    <Text style={styles.list}>• D20 ≥ 16: Causa 1d20 de dano em pontos fatais, deixa em desvantagem de -1
                                    </Text>
                                    <Text style={styles.list}>• D20 ≥ 11: Causa 1d8 em ligamentos, deixa em desvantagem de -1
                                    </Text>
                                    <Text style={styles.list}>• D20 ≤ 10: Causa 1d4 de dano normal.</Text>
                                </View>

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
                                    • <Text style={styles.bold}>Colete:</Text> Pesado– Oferece maior mobilidade, com espaço para kits médicos.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Kit de Primeiros Socorros, morfina, desfibrilador.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
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
                                    • <Text style={styles.bold}>Colete:</Text> Leve – Projetado para transportar dispositivos eletrônicos.
                                </Text>
                                <Text style={styles.list}>
                                    • Equipamentos Extras: Laptop de invasão, bomba sonora, drone de vigilância e sinalizador.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
                                </Text>
                            </View>
                        </View>
                        {//! --------------------------------- Vanguarda --------------------------------
                        }
                        <View style={styles.box} ref={sectionRefs.sec7}>
                            <Text style={styles.subTitle}>
                                Vanguarda
                            </Text>
                            <View style={styles.subBox}>
                                <Text style={styles.subItem}>
                                    Descrição Geral
                                </Text>
                                <Text style={styles.text}>
                                    O Vanguarda é capaz de proteger aliados com seu escudo balístico, bloquear disparos de diferentes calibres e abrir espaço com empurrões estratégicos. Sua presença segura a linha de frente e reduz o dano recebido em equipe.
                                </Text>
                                <Text style={styles.subItem}>
                                    Habilidades Especiais
                                </Text>
                                <Text style={styles.list}>
                                    • Escudo: Usa um escudo blindado em vez de arma primaria capaz de defender aliados ou a si mesmo. Ler mecânica de escudo na aba Armas
                                </Text>
                                <Text style={styles.list}>
                                    • Coragem: O Vanguarda recebe +2 em qualquer rolagem de d20 uma vez por combate.
                                </Text>
                                <Text style={styles.list}>
                                    • Empurrão: Ao rolar +10 no D20, o Vanguarda empurra o inimigo, atordoando-o por um turno. Durante esse tempo, qualquer aliado que atacar o inimigo recebe +2 de bônus na rolagem de ataque.
                                </Text>
                                <Text style={styles.list}>
                                    • Resistente: Resistente a balas de calibre leve(+7 no D20)
                                </Text>
                                <Text style={styles.list}>
                                    • Ainda não: Em estado quase morte, consegue se levantar sozinho e todas suas habilidades são recarregadas. Utilizavel uma única vez no jogo, após uso fica com 1 de HP.
                                </Text>

                                <Text style={styles.subItem}>
                                    Equipamento Inicial
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Primária:</Text> Escudo blindado
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Arma Secundária:</Text> Pistola Taurus PT92
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Colete:</Text> Pesado
                                </Text>
                                <Text style={styles.list}>
                                    •  <Text style={styles.bold}>Equipamentos Extras:</Text> Granadas de fumaça.
                                </Text>
                                <Text style={styles.list}>
                                    • <Text style={styles.bold}>Rádio Tático:</Text> Comunicação com a equipe em um raio de até 100 metros.
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