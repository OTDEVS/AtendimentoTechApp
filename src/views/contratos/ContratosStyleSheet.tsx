import { StyleSheet } from "react-native";
import { default as theme } from '../../customize/theme.json'

export const ContratosStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme['color-basic-200'],
    },
    contents: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    cardContrato: {
        borderRadius: theme['border-radius-card'],
        marginBottom: 5,
    },
    viewCard: {
        //flexDirection: 'row',
        //alignItems: 'center',
    },
    labelTitleContrato: {
        fontSize: 18,
        fontWeight: "bold"
    },
    labelSubtitleContrato: {
        fontSize: 15,
        fontWeight: "bold",
        color: theme['color-basic-600']
    },
    editButton: {
        width: 60,
        height: 73,
        borderRadius: 0,
        backgroundColor: theme['color-basic-200'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredViewModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalDivider: {
        marginVertical: 10
    },
    modalView: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: theme['border-radius-card'],
        elevation: 5,
    },
    viewHeaderModal: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
        paddingTop: 25
    },
    labelTitleModal: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewModal: {
        flex: 1,
        paddingHorizontal: 10
    },
    tableHead: {
        flexDirection: 'row',
        backgroundColor: theme['color-basic-200'],
        height: 40
    },
    tableCell: {
        margin: 6,
        width: 100
    }
    
})