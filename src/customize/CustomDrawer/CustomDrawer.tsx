import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground, Text, View } from "react-native";
import { CustomDrawerStyleSheet } from "./CustomDrawerStyleSheet";
import { Avatar } from "@ui-kitten/components/ui";
import { useSession } from "../../context/sessionContext";

export default function CustomDrawer(props: any) {
    const { userData } = useSession()

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/wave_background.png')}
                style={CustomDrawerStyleSheet.headerDrawerMenu}
            >
                <Avatar
                    size="giant"
                    source={require('../../../assets/robo-ot.png')}
                    style={{ backgroundColor: 'white' }} />
                <Text style={CustomDrawerStyleSheet.labelUsuario}>{userData?.nome}</Text>
                <Text style={CustomDrawerStyleSheet.labelInfolUsuario}>{userData?.email}</Text>
                <Text style={CustomDrawerStyleSheet.labelInfolUsuario}>{userData?.admin && 'Administrador'}</Text>
            </ImageBackground>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}