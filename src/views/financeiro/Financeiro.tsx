import React from "react";
import { Text, View } from "react-native";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { FinanceiroStyleSheet } from "./FinanceiroStyleSheet";

export default function Financeiro() {
    return(
        <View style={FinanceiroStyleSheet.container}>
            <TitleMenu title="Financeiro"/>
            <View style={FinanceiroStyleSheet.contents}>
                <Text>Financeiro</Text>
            </View>
        </View>
    )
}