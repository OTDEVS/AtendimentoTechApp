import React from "react";
import { Text, View } from "react-native";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { TecnicaStyleSheet } from "./TecnicaStyleSheet";

export default function Tecnica() {
    return(
        <View style={TecnicaStyleSheet.container}>
            <TitleMenu title="Técnica"/>
            <View style={TecnicaStyleSheet.contents}>
                <Text>Tecnica</Text>
            </View>
        </View>
    )
}