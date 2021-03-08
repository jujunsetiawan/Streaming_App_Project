import React, { Component } from 'react'
import { Text, View, StatusBar, Image, TouchableOpacity, Dimensions, ImageBackground, TouchableNativeFeedback, ScrollView } from 'react-native'
import { style } from './styledashboard'
import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from '../../assets/loading-blur.png';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const data = [
    {
        image: 'https://miownime.com/wp-content/uploads/2020/12/Shingeki-no-Kyojin-The-Final-Season.jpg',
        title: 'Shingeki no Kyojin: The Final Season',
        genre: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        episode: 10
    },
    {
        image: 'https://miownime.com/wp-content/uploads/2021/01/Dr-Stone-Season-2-Subtitle-Indonesia-Batch1.jpg',
        title: 'Dr.Stone Season 2',
        genre: 'Neque porro quisquam est qui dolorem ipsum ',
        episode: 5
    },
    {
        image: 'https://miownime.com/wp-content/uploads/2021/01/Kaifuku-Jutsushi-no-Yarinaoshi--1024x572.jpg',
        title: 'Kaifuku Jutsushi no Yarinaoshi',
        genre: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        episode: 5
    },
    {
        image: 'https://miownime.com/wp-content/uploads/2021/01/Gotoubun-no-Hanayome-Season-2.jpg',
        title: 'Gotoubun no Hanayome Season 2',
        genre: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        episode: 6
    },
    {
        image: 'https://miownime.com/wp-content/uploads/2020/10/Kamisama-ni-Natta-Hi1.jpg',
        title: 'Kamisama ni Natta Hi',
        genre: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
        episode: 12
    }
];

class Dashboard extends Component {
    renderItem = ({ item, index }) => {
        const { image, title, genre, episode } = item
        return (
            <TouchableOpacity
                style={style.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index)
                }}>
                <Image
                    source={{ uri: image }}
                    style={style.item}
                    loadingIndicatorSource={loadingBlurImage}
                    resizeMode="cover"
                />
                <View style={style.carouselTitle}>
                    <Text numberOfLines={1} style={style.carouselText1}>{title}</Text>
                    <Text numberOfLines={1} style={style.carouselText2}>{genre}</Text>
                </View>
                <View style={style.carouselEpisode}>
                    <Text numberOfLines={1} style={style.carouselText3}>Episode {episode}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor='#ffaaaa' />
                <View style={style.contHeader}>
                    <View style={style.contTitle}>
                        <Text style={style.welcome}>Welcome to NyanKoi</Text>
                        <Text style={style.lets}>Let's explore your favorite anime</Text>
                    </View>
                    <TouchableOpacity style={[style.search, { margin: 17 }]}>
                        <Image
                            source={require('../../assets/search.png')}
                            style={style.search}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={style.ongoing}>Popular Anime</Text>
                    <View style={style.sliderContainer}>
                        <Swiper activeDotColor='#ffffff0a' dotColor='#ffffff0a' height={100}  autoplay>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Detail")} style={style.slide}>
                                <Image
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2021/01/Dr-Stone-Season-2-Subtitle-Indonesia-Batch1.jpg' }}
                                    resizeMode="stretch"
                                    style={style.sliderImage}
                                />
                                <View style={style.swiperTitle}>
                                    <Text numberOfLines={1} style={style.swiperText1}>Dr Stone Season 2</Text>
                                    <Text numberOfLines={1} style={style.swiperText2}>Shounen, Adventure, Drama </Text>
                                </View>
                                <View style={style.contRating1}>
                                    <Image
                                        source={require('../../assets/favourites.png')}
                                        style={style.rating}
                                    />
                                    <Text numberOfLines={1} style={style.carouselText3}>9.45</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.slide}>
                                <Image
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2021/01/Gotoubun-no-Hanayome-Season-2.jpg' }}
                                    resizeMode="stretch"
                                    style={style.sliderImage}
                                />
                                <View style={style.swiperTitle}>
                                    <Text numberOfLines={1} style={style.swiperText1}>Gotobun no Hanayome Season 2</Text>
                                    <Text numberOfLines={1} style={style.swiperText2}>Romance, Drama, Echi </Text>
                                </View>
                            </TouchableOpacity>
                        </Swiper>
                    </View>
                    <View style={style.topGenres}>
                        <Text style={style.genres}>Top Genres</Text>
                        <TouchableOpacity>
                            <Text style={style.viewall}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.containerGenre}>
                        <TouchableNativeFeedback>
                            <View style={style.genre}>
                                <ImageBackground
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2020/12/Shingeki-no-Kyojin-The-Final-Season.jpg' }}
                                    style={[style.contGenre]}
                                    borderRadius={5}>
                                    <Text style={style.titleGenre}>Action</Text>
                                </ImageBackground>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={[style.genre]}>
                                <ImageBackground
                                    style={style.contGenre}
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2021/01/Gotoubun-no-Hanayome-Season-2.jpg' }}
                                    borderRadius={5}s>
                                    <Text style={style.titleGenre}>Romance</Text>
                                </ImageBackground>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={style.genre}>
                                <ImageBackground
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2019/10/Koe-no-Katachi-BD-1024x574.jpg' }}
                                    style={[style.contGenre]}
                                    borderRadius={5}>
                                    <Text style={style.titleGenre}>Drama</Text>
                                </ImageBackground>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={style.topGenres}>
                        <Text style={style.genres}>Ongoing Anime</Text>
                        <TouchableOpacity>
                            <Text style={style.viewall}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.carouselContainer}>
                        <Carousel style={style.carousel}
                            data={data}
                            renderItem={this.renderItem}
                            itemWidth={140}
                            containerWidth={width - 40}
                            separatorWidth={0}
                            ref={(c) => {
                                this.numberCarousel = c
                            }}
                            inActiveOpacity={0.4}
                        // pagingEnable={false}
                        // minScrollDistance={20}
                        />
                    </View>
                    <View style={[style.topGenres, { marginBottom: 4 }]}>
                        <Text style={style.genres}>Movie Anime</Text>
                        <TouchableOpacity>
                            <Text style={style.viewall}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.sliderContainer}>
                        <Swiper style={style.wrapper} activeDotColor='#ffffff0a' dotColor='#ffffff0a' height={100} horizontal={false} autoplay>
                            <TouchableOpacity style={style.slide}>
                                <Image
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2019/10/Koe-no-Katachi-BD-1024x574.jpg' }}
                                    resizeMode="stretch"
                                    style={style.sliderImage}
                                />
                                <View style={style.swiperTitle}>
                                    <Text numberOfLines={1} style={style.swiperText1}>Koe no Katachi</Text>
                                    <Text numberOfLines={1} style={style.swiperText2}>Drama, School, Shounen </Text>
                                </View>
                                <View style={style.contRating1}>
                                    <Image
                                        source={require('../../assets/favourites.png')}
                                        style={style.rating}
                                    />
                                    <Text numberOfLines={1} style={style.carouselText3}>9.45</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.slide}>
                                <Image
                                    source={{ uri: 'https://miownime.com/wp-content/uploads/2019/08/Fate-stay-night-Heavens-Feel-II.-Lost-Butterfly-BD-1024x576.jpg' }}
                                    resizeMode="stretch"
                                    style={style.sliderImage}
                                />
                                <View style={style.swiperTitle}>
                                    <Text numberOfLines={1} style={style.swiperText1}>Fate Stay Night Heavens Feel II Lost-Butterfly</Text>
                                    <Text numberOfLines={1} style={style.swiperText2}>Action, Fantasy, Magic, Supenatural </Text>
                                </View>
                            </TouchableOpacity>
                        </Swiper>
                    </View>
                    <View style={style.topGenres}>
                        <Text style={style.genres}>Live Action</Text>
                        <TouchableOpacity>
                            <Text style={style.viewall}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.contLiveaction}>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://www.okeguys.com/wp-content/uploads/2021/01/Death-Note-1024x576.webp' }}
                                style={style.liveactionImage}
                                resizeMode="cover"
                            />
                            <View style={style.liveTitle}>
                                <Text numberOfLines={1} style={style.liveText1}>Death Note</Text>
                                <Text numberOfLines={1} style={style.liveText2}>Mistery, Action, Trhiller</Text>
                            </View>
                            <View style={style.contRating}>
                                <Image
                                    source={require('../../assets/favourites.png')}
                                    style={style.rating}
                                />
                                <Text numberOfLines={1} style={style.carouselText3}>9.45</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={{ uri: 'https://www.okeguys.com/wp-content/uploads/2021/01/Death-Note-1024x576.webp' }}
                                style={style.liveactionImage}
                                resizeMode="cover"
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Dashboard
