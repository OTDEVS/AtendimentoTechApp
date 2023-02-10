import { StyleSheet } from "react-native";
import { default as theme } from '../../customize/theme.json'

export const FinanceiroStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme['color-basic-200'],
    },
    contents: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})