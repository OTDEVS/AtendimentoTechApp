import { StyleSheet } from "react-native";
import { default as theme } from '../../customize/theme.json'

export const HomeStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme['color-basic-200']
    },
    contents: {
        flex: 1,
        paddingTop: 15,
    },
    viewPager: {
        marginBottom: 25
    },
    tab: {
        height: 180,
        paddingHorizontal: 15
    },
    labelSection: {
        marginLeft: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: theme['color-basic-600']
    },
    card: {
        flex: 1,
        borderRadius: 15,
        elevation: 10,
    },
    labelTitleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10
    },
    viewValueBar: {
        flexDirection: "row",
        alignItems: "center"
    },
    labelValueCard: {
        flex: 1,
        fontSize: 55,
        fontWeight: 'bold',
        justifyContent: "space-between",
        color: 'white'
    },
    viewPorcentValueCard: {
        alignItems: "center",
        justifyContent: "center"
    },
    labelPorcentage: {
        color: 'white',
    },
    labelTotalFaturas: {
        fontSize: 20,
        color: 'white',
        marginTop: 20
    }
})