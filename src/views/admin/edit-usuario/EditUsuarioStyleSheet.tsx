import { StyleSheet } from "react-native";
import { default as theme } from '../../../customize/theme.json'

export const EditUsuarioStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme['color-basic-200'],
    },
    labelSection: {
        marginLeft: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: theme['color-basic-600']
    },
    viewForm: {
        marginBottom: 10
    },
    viewFormRow: {
        flexDirection: "row"
    },
    inputForm: {
        marginBottom: 5,
        borderRadius: theme['border-radius-input'],
        backgroundColor: theme['color-basic-100'],
    },
    submitButton: {
        borderRadius: theme['border-radius-input'],
    },
    inputIcon: {
        height: 20
    }
})