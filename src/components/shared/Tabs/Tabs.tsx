import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../../../customize/theme.json"

import Home from "../../../views/home/Home";
import Ajuda from "../../../views/ajuda/Ajuda";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme['color-primary-600'],
                tabBarLabelStyle: { fontSize: 16 }
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Ajuda" component={Ajuda} />
        </Navigator>
    )
}