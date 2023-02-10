import { StyleSheet } from "react-native";
import { default as theme } from '../theme.json'

export const CustomDrawerStyleSheet = StyleSheet.create({
    headerDrawerMenu: {
        justifyContent: 'flex-end',
        height: 180,
        paddingVertical: 18,
        paddingHorizontal: 20
    },
    labelUsuario: {
        fontSize: 25,
        color: 'white',
        marginTop: 5
    },
    labelInfolUsuario: {
        fontSize: 15,
        color: 'white'
    }
})