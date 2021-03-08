import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    welcome: {
        fontSize: 17,
        fontWeight: '700'
    },
    lets: {
        fontSize: 12,
        color: '#9e9e9e'
    },
    contTitle: {
        marginTop: 15,
        marginLeft: 17
    },
    search: {
        height: 30,
        width: 30,
        tintColor: '#9e9e9e',
    },
    contHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ongoing: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 15,
        marginLeft: 17
    },
    carouselContainer: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center'
    },
    carousel: {
        flex: 1,
        overflow: 'visible',
    },
    item: {
        width: 140,
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    carouselTitle: {
        position: 'absolute',
        backgroundColor: '#0000005a',
        bottom: 0,
        height: 40,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    liveTitle: {
        position: 'absolute',
        backgroundColor: '#0000005a',
        bottom: 0,
        height: 45,
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    carouselText1: {
        color: '#fff',
        marginHorizontal: 5,
        marginTop: 3
    },
    carouselText2: {
        color: '#fff',
        fontSize: 10,
        opacity: 0.5,
        marginHorizontal: 5,
    },
    liveText1: {
        color: '#fff',
        marginHorizontal: 7,
        marginTop: 1,
        fontSize: 17,
        fontWeight: '700'
    },
    liveText2: {
        color: '#fff',
        fontSize: 13,
        opacity: 0.8,
        marginHorizontal: 7,
    },
    carouselEpisode: {
        height: 30,
        position: 'absolute',
        backgroundColor: '#ffaaa59a',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    carouselText3: {
        color: '#fff',
        marginHorizontal: 10,
    },
    sliderContainer: {
        height: 200,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "transparent",
        marginTop: 8
    },
    sliderImage: {
        height: "90%",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10
    },
    swiperTitle: {
        position: 'absolute',
        bottom: '10%',
    },
    swiperText1: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        marginHorizontal: 35
    },
    swiperText2: {
        color: '#fff',
        marginHorizontal: 35,
        opacity: 0.7,
        fontSize: 13
    },
    genre: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 9,
        marginLeft: 10,
    },
    contGenre: {
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleGenre: {
        color: '#fff',
        fontWeight: '700',
        marginHorizontal: 20,
        fontSize: 15
    },
    containerGenre: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        marginHorizontal: 10,
        maxHeight: 200,
    },
    genres: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10
    },
    viewall: {
        color: 'dodgerblue',
        marginTop: 12
    },
    topGenres: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17
    },
    liveactionImage: {
        height: 230,
        width: 150,
        borderRadius: 10,
        marginTop: 15
    },
    contLiveaction: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    contRating: {
        height: 30,
        position: 'absolute',
        backgroundColor: '#ffaaa59a',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        top: 15,
        flexDirection: 'row'
    },
    contRating1: {
        height: 30,
        position: 'absolute',
        backgroundColor: '#ffaaa59a',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        flexDirection: 'row',
        left: '5%',
        top: '5%'
    },
    rating: {
        height: 15,
        width: 15,
        marginLeft: 10
    }
})