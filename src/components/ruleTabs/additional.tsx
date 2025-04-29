import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../utils/colors'

export default function AdditionalTab() {

    return (
        <ScrollView style={{ paddingHorizontal: 10, flexDirection: "column", height: '100%' }}>
            <View style={{ paddingBottom: 50 }}>

                <Text style={styles.title}>Regras adicionais</Text>
                <View style={[styles.box, { paddingTop: 10 }]}>
                    <View style={styles.row}>
                        <Text style={styles.unique}>1.</Text>
                        <Text style={styles.list}>Trocar de arma exige uma ação secundária.</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.unique}>2.</Text>
                        <Text style={styles.list}>É possível trocar de arma sem gastar ação jogando a que está utilizando no chão, porém, terá que gastar uma ação secundária depois caso queria pegar a arma de volta.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.unique}>3.</Text>
                        <Text style={styles.list}>Só é permitido coletar munição de inimigos caso venha de um cartucho de mesma capacidade da arma desejada.
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.unique}>4.</Text>
                        <Text style={styles.list}>Alguns equipamentos dependendo da classe são recarregáveis com o tempo, <Text style={styles.bold}>EX:</Text> o medkit do médico recarrega após <Text style={styles.bold}>3 turnos</Text> depois de utilizado.</Text>
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
    }
})