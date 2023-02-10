import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerNavigationOptions } from "@react-navigation/drawer";
import theme from "../customize/theme.json"
import CustomDrawer from "../customize/CustomDrawer/CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../views/home/Home"
import Contratos from "../views/contratos/Contratos";
import Tecnica from "../views/tecnica/Tecnica";
import Financeiro from "../views/financeiro/Financeiro"
import Relatorios from "../views/relatorios/Relatorios";
import Admin from "../views/admin/Admin";
import Ajuda from "../views/ajuda/Ajuda";
import { useSession } from "../context/sessionContext";

const { Navigator, Screen } = createDrawerNavigator();


const screenOptions: DrawerNavigationOptions = {
    headerShown: false,
    drawerActiveTintColor: theme['color-primary-600'],
    drawerLabelStyle: { marginLeft: -15, fontSize: 16 }
}

const menuOptions = [
    {
        name: 'Início',
        component: Home,
        icon: 'home-outline',
        rule: ['']
    },
    {
        name: 'Contratos',
        component: Contratos,
        icon: 'document-text-outline',
        rule: ['ADMIN', 'RL_CONTRATOS']
    },
    {
        name: 'Técnica',
        component: Tecnica,
        icon: 'construct-outline',
        rule: ['ADMIN', 'RL_TECNICA']
    },
    {
        name: 'Financeiro',
        component: Financeiro,
        icon: 'cash-outline',
        rule: ['ADMIN', 'RL_FINANCEIRO']
    },
    {
        name: 'Relatórios',
        component: Relatorios,
        icon: 'bar-chart-outline',
        rule: ['ADMIN', 'RL_RELATORIOS']
    },
    {
        name: 'Administrador',
        component: Admin,
        icon: 'people-outline',
        rule: ['ADMIN']
    },
    {
        name: 'Ajuda',
        component: Ajuda,
        icon: 'help-circle-outline',
        rule: ['']
    },
]

const drawMenuOption = (): ReactNode => {
    return menuOptions.map(element => {
        if (checkRole(element.rule)) {
            return (
                <Screen key={element.name} name={element.name} component={element.component} options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name={element.icon} size={22} color={color} />
                    )
                }} />
            );
        }
    });
}

function havePermission(rules: string[], userRules: string[]): boolean {
    for (let rule of rules) {
        if (userRules.includes(rule) || rules.includes('')) {
            return true
        }
    }
    return false
}

function checkRole(rules: string[]): boolean {
    const { userPermissions } = useSession()
    const userRules = userPermissions
    return havePermission(rules, userRules)
}


export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Início"
                screenOptions={screenOptions}
                drawerContent={props => <CustomDrawer {...props} />}
            >
                {drawMenuOption()}
            </Navigator>
        </NavigationContainer>
    )
}
