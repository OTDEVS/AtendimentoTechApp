import React from "react";
import { Text, View } from "react-native";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { AjudaStyleSheet } from "./AjudaStyleSheet";

export default function Ajuda() {
    return(
        <View style={AjudaStyleSheet.container}>
            <TitleMenu title="Ajuda"/>
            <View style={AjudaStyleSheet.contents}>
                <Text>Ajuda</Text>
            </View>
        </View>
    )
}