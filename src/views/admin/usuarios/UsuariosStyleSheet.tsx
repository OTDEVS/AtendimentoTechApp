import { StyleSheet } from "react-native";
import { default as theme } from '../../../customize/theme.json'

export const UsuariosStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme['color-basic-200'],
        paddingHorizontal:5,
    },
    contents: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardUser: {
        borderRadius: theme['border-radius-card'],
        marginBottom: 5,
    },
    viewCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nomeUsrCard: {
        marginLeft: 18,
        fontWeight: 'bold',
        color: theme['color-basic-600'],
        fontSize: 18
    },
    emailUsrCard: {
        marginLeft: 18,
        color: theme['color-basic-600']
    },
    editButton: {
        position: 'absolute',
        width: 60,
        height: 73,
        top:-16,
        right: -24,
        borderRadius:0,
        backgroundColor: theme['color-basic-200'],
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    buttonAddUsr: {
        position: 'absolute',
        width: 65,
        height: 65,
        right: 5,
        bottom: 15,
        borderRadius: 65,
        zIndex: 999,
    }
})