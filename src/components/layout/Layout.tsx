import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "../../navigator/Navigator";
import Login from "../../views/login/Login";
import { useSession } from "../../context/sessionContext";
import LoadScreen from "../../views/load-screen/LoadScreen";


export default function Layout() {
    const { sessionData, loading } = useSession()

    if (loading) {
        return (
            <LoadScreen/>
        )
    }
    else {
        return (
            <View style={style.container}>
                {sessionData ? <DrawerNavigator /> : <Login />}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
})