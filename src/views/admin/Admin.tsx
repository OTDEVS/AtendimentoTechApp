import React from "react";
import { View } from "react-native";
import { TitleMenu } from "../../components/shared/Header/TitleMenu";
import { AdminStyleSheet } from "./AdminStyleSheet";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Usuarios from "./usuarios/Usuarios";
import EditUsuario from "./edit-usuario/EditUsuario"

const { Navigator, Screen } = createNativeStackNavigator();

export default function Admin(props: any) {

    return (
        <View style={AdminStyleSheet.container}>
            <TitleMenu title="Administrador" />
            <View style={AdminStyleSheet.contents}>
                <Navigator
                    initialRouteName="Usuarios"
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Screen name="Usuarios" component={Usuarios} />
                    <Screen name="EditUsuario" component={EditUsuario} />
                </Navigator>
            </View>
        </View>
    )
}