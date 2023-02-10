import React from "react";
import { Text, View } from "react-native";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { RelatoriosStyleSheet } from "./RelatoriosStyleSheet";

export default function Relatorios() {
    return(
        <View style={RelatoriosStyleSheet.container}>
            <TitleMenu title="Relatórios"/>
            <View style={RelatoriosStyleSheet.contents}>
                <Text>Relatórios</Text>
            </View>
        </View>
    )
}