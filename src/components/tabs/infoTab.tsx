import React, { ReactNode, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../utils/colors';
import AdditionalTab from '../ruleTabs/additional';
import ClassTab from '../ruleTabs/classes';
import ExtractionTab from '../ruleTabs/extraction';
import GeralRuleTab from '../ruleTabs/geral';
import ItemsTab from '../ruleTabs/items';
import PrecisionTab from '../ruleTabs/precision';
import RuleTab from '../ruleTabs/rule';
import WeaponTab from '../ruleTabs/weapons';

const { width } = Dimensions.get('screen');
export default function InfoTab() {
    const [menu, setMenu] = useState("geral")
    const tabContent: Record<string, ReactNode> = {
        geral: <GeralRuleTab />,
        rules: <RuleTab />,
        extraction: <ExtractionTab />,
        additional: <AdditionalTab />,
        precision: <PrecisionTab />,
        weapon: <WeaponTab />,
        items: <ItemsTab />,
        class: <ClassTab />,
    };

    return (
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "#171717" }}>
            <View style={{ width: width * 0.12, backgroundColor: colors.gray, borderRightWidth: 8 }}>
                <ScrollView >
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('geral')}>
                        <Text style={styles.text}>Geral</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('rules')}>
                        <Text style={styles.text}>Regras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('precision')}>
                        <Text style={styles.text}>Precisão</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('weapon')}>
                        <Text style={styles.text}>Armas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('items')}>
                        <Text style={styles.text}>Itens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('class')}>
                        <Text style={styles.text}>Classes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('extraction')}>
                        <Text style={styles.text}>Extração</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.aside}
                        onPress={() => setMenu('additional')}>
                        <Text style={styles.text}>Adicional</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
                {tabContent[menu]}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    text: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 15
    },
    aside: {
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: 2,
        borderTopWidth: 2
    }
})