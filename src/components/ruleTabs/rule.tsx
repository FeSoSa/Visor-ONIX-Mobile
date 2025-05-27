import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default function RuleTab() {

    return (
        <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }}>
            <View style={{ paddingBottom: 50 }}>

                <Text style={styles.title}>Regras</Text>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Sistema de Jogo</Text>
                    <Text style={styles.text}>
                        As Operações ONIX utilizam um sistema de jogo baseado em rolagens de dados e tomadas de decisão estratégicas. Abaixo estão os fundamentos
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Ações e Testes</Text>
                    <Text style={styles.text}>
                        Os jogadores realizam testes de habilidades com rolagens de dados (D20). Resultados iguais ou maiores que o número-alvo determinado pelo mestre indicam sucesso
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Sistema de Precisão</Text>
                    <Text style={styles.text}>
                        Para realizar um ataque, o jogador rola um <Text style={styles.bold}>D20</Text> e soma o valor da <Text style={styles.bold}>habilidade de bônus de Calibre e Mira</Text>. O resultado define quantos tiros acertaram o alvo e se foram fatais ou não. Modificadores podem ser aplicados dependendo de fatores como <Text style={styles.bold}>distância, cobertura ou visibilidade</Text>. A <Text style={styles.bold}>penetração de armadura</Text> vai depender do tipo de arma utilizada.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Armaduras e Coletes</Text>
                    <Text style={styles.text}>
                        As armaduras e coletes oferecem proteção contra tiros, absorvendo o impacto de balas. Cada tipo de colete tem um número limitado de "cargas" que pode suportar, com placas que se desgastam após um certo número de impactos. Após perderem sua capacidade de absorção, as placas deixam de oferecer proteção. A efetividade da armadura pode ser influenciada pela <Text style={styles.bold}>penetração da bala </Text> da arma usada pelo inimigo.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Defesa de escudo</Text>
                    <Text style={styles.text}>
                        Quando o Vanguarda tenta defender a si mesmo ou a um aliado de um ataque, ele rola d20.
                    </Text>
                    <Text style={styles.list}>
                        • Dependendo do valor ele consegue defender completamente o dano, verifique na aba Precisão a tabela do escudo.
                    </Text>
                    <Text style={styles.list}>
                        • Se o Vanguarda falhar ao proteger a si mesmo, recebe a redução de -30% no dano.
                    </Text>
                    <Text style={styles.list}>
                        • Se o Vanguarda falhar ao proteger um aliado, o dano é dividido entre Vanguarda e o Aliado, e ambos recebem a redução de -15% no dano.
                    </Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>Uso de Armas Não Proprietárias</Text>
                    <Text style={styles.text}>
                        Sempre que um operador utilizar uma arma que não seja a de seu equipamento padrão (ex.: armas pegas de inimigos ou do ambiente), aplica-se <Text style={styles.bold}>-2 na rolagem de precisão</Text>. Essa penalidade reflete a falta de familiaridade com a arma, afetando o desempenho em combate.
                    </Text>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Sistema de Desmaio</Text>
                    <Text style={styles.text}>
                        No sistema de combate, o desmaio é uma mecânica que reflete a incapacitação temporária de um personagem devido a danos severos ou eventos críticos. O desmaio pode ocorrer nas seguintes condições
                    </Text>
                    <View style={styles.subBox}>
                        <Text style={styles.subItem}>Perda Total de Proteção em um Único Ataque</Text>
                        <Text style={styles.list}>
                            • Caso o colete balístico perca todas as suas cargas de proteção de forma instantânea devido a um único ataque, o personagem desmaia por 1 turno.
                        </Text>
                        <Text style={styles.list}>
                            • Após o turno de desmaio, o personagem recupera a consciência, mas permanece vulnerável, sem a proteção do colete.
                        </Text>
                        <Text style={styles.subItem}>Ataque Letal que Não Seja Fatal</Text>
                        <Text style={styles.list}>
                            • Alguns ataques letais podem deixar o personagem incapacitado, mas não morto, dependendo da arma e da rolagem de dados. Nesse caso, o personagem desmaia e precisa ser estabilizado por um Médico ou esperar 3 turnos para recuperar a capacidade de agir.
                        </Text>
                    </View>
                </View>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Sistema de Reação</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Todos os jogadores e inimigos possuem a habilidade chamada <Text style={styles.bold}>Reação</Text>, que permite realizar uma ação imediata em resposta a uma situação específica, como impedir que um inimigo complete uma ação importante.
                        </Text>
                        <Text style={styles.list}>
                            • Funcionamento: O jogador descreve sua ação ao mestre. Se o mestre aprovar, o jogador realiza uma rolagem de D20.
                        </Text>
                        <View style={styles.subBox}>
                            <Text style={styles.list}>
                                • <Text style={styles.bold}>Resultado de 10 ou mais:</Text> A ação funciona.
                            </Text>
                            <Text style={styles.list}>
                                • <Text style={styles.bold}>Resultado abaixo de 10:</Text> A tentativa falha, e o inimigo continua com sua ação.
                            </Text>
                        </View>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Custo:</Text> Usar a habilidade Reação consome uma <Text style={styles.bold}>ação secundária</Text> do jogador ou inimigo no próximo turno.
                        </Text>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Observação:</Text> A Reação não pode ser usada mais de uma vez no mesmo turno.
                        </Text>
                        <Text style={[styles.list, { color: colors.waterGreen, fontWeight: 'bold' }]}>Exemplos de Uso Criativo</Text>
                        <View style={styles.subBox}>
                            <Text style={styles.list}>
                                • Impedir que um inimigo recarregue a arma.
                            </Text>
                            <Text style={styles.list}>
                                • Derrubar um objeto próximo para bloquear a visão ou o caminho de um adversário.
                            </Text>
                            <Text style={styles.list}>
                                • Usar algo do ambiente, como chutar areia nos olhos do inimigo para atrapalhá-lo.
                            </Text>
                            <Text style={styles.list}>
                                • Puxar um aliado para fora da linha de tiro.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.box, { paddingTop: 10 }]}>
                    <Text style={styles.subTitle}>Sistema de Desvio</Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Quando um ataque acerta, o alvo pode tentar desviar rolando um dado equivalente.
                        </Text>
                        <View style={styles.subBox}>
                            <Text style={styles.list}>
                                • <Text style={styles.bold}>D20 / D10 / D8 :</Text> Se o resultado for 2 ou mais que a rolagem do atacante, ele evita o dano.
                            </Text>
                            <Text style={styles.list}>
                                • <Text style={styles.bold}>D4:</Text> Se o resultado for 4, ele evita o dano.
                            </Text>
                        </View>
                        <Text style={styles.list}>
                            • <Text style={styles.bold}>Observação:</Text> Desvantagens, contexto ou surpresas podem impedir ou dificultar a rolagem.
                        </Text>
                        <View style={styles.subBox}>
                            <Text style={styles.list}>
                                •  <Text style={styles.bold}>Exemplo:</Text> pego de surpresa
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.subTitle}>Tempestade de areia ou nevasca - Evento
                    </Text>
                    <Text style={styles.text}>
                        Eventos climáticos podem ocorrer aleatoriamente e causar grande dificuldade aos jogadores.
                    </Text>
                    <View style={styles.subBox}>
                        <Text style={styles.list}>
                            • Comunicação total bloqueada
                        </Text>
                        <Text style={styles.list}>
                            • Rolagens de ataque tem <Text style={styles.bold}>-2 de desvantagem</Text>
                        </Text>
                        <Text style={styles.list}>
                            • Habilidades ou testes de percepção não funcionam
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