import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        padding: 20,
        rowGap: 15
    },
    textos: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 5,
        maxWidth: 225
    },
    heading: {
        fontSize: 15,
        textAlign: 'center',
        maxWidth: 150
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        height: 65,
        padding: 10,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagemCard: {
        height: 65,
        width: 65,
    }
});