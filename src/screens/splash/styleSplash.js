import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        height: 250,
        width: 250
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    versi: {
        position: "absolute",
        fontSize: 15,
        bottom: 10,
        color: "#9e9e9e"
    }
})