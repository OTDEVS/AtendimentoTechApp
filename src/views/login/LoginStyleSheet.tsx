import { StyleSheet } from "react-native";
import { default as theme } from '../../customize/theme.json'

export const LoginStyleSheet = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 216,
        backgroundColor: theme['color-primary-600']
    },
    logoOffice: {
        width: 300,
        height: 50,
        resizeMode: 'contain'
    },
    labelHeader: {
        marginTop: 5,
        fontSize: 25,
        color: 'white'
    },
    formContainer: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
    },
    viewInputForm: {
        marginBottom: 15
    },
    inputForm: {
        marginBottom: 5,
        borderRadius: theme['border-radius-input']
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    forgotPasswordButton: {
        paddingHorizontal: 0
    },
    signInButton: {
        marginVertical: 30,
        marginHorizontal: 16
    },
    labelDanger: {
        color: theme['color-danger-700'],
        fontWeight: "bold"
    }
})