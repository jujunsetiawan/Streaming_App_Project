import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    contTitle: {
        maxHeight: 75,
        backgroundColor: '#fff',
        justifyContent: 'center',
        elevation: 2,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000000a1',
        padding: 15
    },
    contData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 5
    },
    data: {
        width: '71.5%'
    },
    contSynopsis: {
        padding: 10,
        maxHeight: 200,
    },
    contSynopsis1: {
        padding: 10,
    },
    titleSynopsis: {
        fontWeight: '700',
        fontSize: 17,
        color: '#000000a1',
        marginBottom: 5,
    },
    titleMain: {
        fontWeight: '700',
        fontSize: 17,
        color: '#000000a1',
        marginHorizontal: 10,
        marginVertical: 5
    },
    synopsis: {
        lineHeight: 20
    },
    caracter: {
        height: 120,
        width: 90,
        borderRadius: 5,
        marginTop: 5,
        marginHorizontal: 5
    },
    image: {
        height: 120,
        width: 90,
        borderRadius: 5
    },
    more: {
        color: 'dodgerblue',
        textAlign: 'right',
        marginTop: 5,
        marginRight: 5
    },
    contMain: {
        flexDirection: 'row',
        marginHorizontal: 5
    },
    carouselTitle: {
        position: 'absolute',
        backgroundColor: '#0000003a',
        bottom: 0,
        height: 30,
        width: '100%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    textMain: {
        fontSize: 12,
        color: '#fff',
        marginHorizontal: 4
    },
    contEranda: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center'
    },
    contStream: {
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stream: {
        fontSize: 18,
        fontWeight: '400',
        color: '#9e9e9e'
    },
    contEps: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5
    },
    eps: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffaaaa',
        marginHorizontal: 5,
        marginVertical: 5
    },
    textEps: {
        color: '#ffaaaa',
        padding: 5,
        marginHorizontal: 3
    },
    titleMp: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffaaaa',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    mp: {
        color: '#ffaaaa',
        fontWeight: '700'
    },
    contDown: {
        marginHorizontal: 5
    },
    contLink: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: 10
    },
    link: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ffaaaa',
        marginHorizontal: 5,
        marginVertical: 5
    },
    textLink: {
        padding: 5,
        color: 'dodgerblue',
        marginHorizontal: 3
    }
})