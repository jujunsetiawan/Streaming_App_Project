import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback, Linking } from 'react-native'
import * as Animatable from 'react-native-animatable';
import YouTube from 'react-native-youtube';
import { style } from './styleDetail'

export class Detail extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            eranda: false
        }
    }

    handleViewRef = ref => this.view = ref;
    handleTouchRef = ref => this.touch = ref;
    handleDownRef = ref => this.down = ref;
    bounce = () => this.view.bounce(800);
    pulse = () => this.view.pulse(500);
    eranda = () => this.touch.pulse(500) && this.setState({ eranda: false });
    ins = () => this.down.pulse(500) && this.setState({ eranda: true });

    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <YouTube
                        apiKey='AIzaSyBzRce9jyYMSKWXe_QePl7wkXgdCwihZQw'
                        videoId={'o_go-8TFBXs'}
                        style={{ alignSelf: 'stretch', height: 200 }}
                    />
                    <View style={style.contTitle}>
                        <Animatable.Text animation='slideInDown' easing='ease-out' duration={2000} numberOfLines={2} style={style.title}>Shingeki no Kyojin The Final Season</Animatable.Text>
                    </View>
                    <View style={style.contData}>
                        <Animatable.View animation='slideInLeft' easing='ease-out' duration={2000} style={style.titleData}>
                            <Text style={{ marginBottom: 3 }}>Japanese</Text>
                            <Text style={{ marginBottom: 3 }}>Skor</Text>
                            <Text style={{ marginBottom: 3 }}>Produser</Text>
                            <Text style={{ marginBottom: 3 }}>Tipe</Text>
                            <Text style={{ marginBottom: 3 }}>Status</Text>
                            <Text style={{ marginBottom: 3 }}>Total Episode</Text>
                            <Text style={{ marginBottom: 3 }}>Durasi</Text>
                            <Text style={{ marginBottom: 3 }}>Studio</Text>
                            <Text style={{ marginBottom: 3 }}>Tanggal Rilis</Text>
                            <Text style={{ marginBottom: 3 }}>Genre</Text>
                        </Animatable.View>
                        <Animatable.View animation='lightSpeedIn' easing='ease-out' duration={3000} style={style.data}>
                            <Text style={{ marginBottom: 3 }} numberOfLines={1}>:  The Final Season</Text>
                            <Text style={{ marginBottom: 3 }}>:  92.2</Text>
                            <Text style={{ marginBottom: 3 }} numberOfLines={1}>:  Pony Canyon, Techno Sound</Text>
                            <Text style={{ marginBottom: 3 }}>:  TV</Text>
                            <Text style={{ marginBottom: 3 }}>:  Ongoing</Text>
                            <Text style={{ marginBottom: 3 }}>:  Unknown</Text>
                            <Text style={{ marginBottom: 3 }}>:  Unknown</Text>
                            <Text style={{ marginBottom: 3 }}>:  Mappa</Text>
                            <Text style={{ marginBottom: 3 }}>:  Des 07, 2020 </Text>
                            <Text style={{ marginBottom: 3 }} numberOfLines={1}>:  Action, Drama, Fantasy, Mistery, Millitary</Text>
                        </Animatable.View>
                    </View>
                    <Animatable.View animation={this.state.show == true ? 'flipInX' : 'flipInY'} easing='ease-out' duration={2000} style={this.state.show == false ? style.contSynopsis : style.contSynopsis1}>
                        <Animatable.Text animation='bounceInDown' easing='ease-out' duration={3000} style={style.titleSynopsis}>Synopsis</Animatable.Text>
                        <Animatable.Text animation='slideInUp' easing='ease-out' duration={2000} numberOfLines={this.state.show == false ? 7 : null} style={style.synopsis}>Eren telah berhasil melihat lautan setelah perjuangannya. Perang yang dimana Marley melawan aliansi timur tengah. Di musim keempat ini, akan muncul berbagai karakter baru seperti magath, Pieck, Gaby dan banyak yang lainya. alkefedf ekljf wejfg wrojg ewqorjg wroig wroijg worigw rrrowigr wgrwoigwg wrog wrokgwok gworkgw rog worig worggggggwpowrkg worgk wrgkw plkwrg wo </Animatable.Text>
                        <Animatable.Text animation={this.state.show == false ? 'pulse' : null} easing='ease-out' duration={1000} style={style.more} onPress={() => this.setState({ show: !this.state.show })}>{this.state.show == false ? 'Show All' : 'Close'}</Animatable.Text>
                    </Animatable.View>
                    <Text style={style.titleMain}>Main Caracter</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={style.contMain}>
                        <TouchableWithoutFeedback onPress={this.pulse}>
                            <Animatable.View ref={this.handleViewRef} style={style.caracter}>
                                <Image
                                    source={require('../../assets/caracter.jpg')}
                                    style={style.image}
                                />
                                <View style={style.carouselTitle}>
                                    <Text numberOfLines={2} style={style.textMain}>Mikasa Ackerman</Text>
                                </View>
                            </Animatable.View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                    <View style={style.contEranda}>
                        <TouchableOpacity onPress={this.eranda} style={this.state.eranda == true ? style.contStream : [style.contStream, { borderBottomWidth: 3, borderColor: '#ffaaaa' }]}>
                            <Animatable.View ref={this.handleTouchRef}>
                                <Text style={this.state.eranda == true ? style.stream : [style.stream, { color: '#ffaaaa' }]}>Streaming</Text>
                            </Animatable.View>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.eranda == false ? style.contStream : [style.contStream, { borderBottomWidth: 3, borderColor: '#ffaaaa' }]} onPress={this.ins}>
                            <Animatable.View ref={this.handleDownRef}>
                                <Text style={this.state.eranda == false ? style.stream : [style.stream, { color: '#ffaaaa' }]}>Download</Text>
                            </Animatable.View>
                        </TouchableOpacity>
                    </View>
                    {this.state.eranda == false
                        ? <View style={style.contEps}>
                            <TouchableNativeFeedback>
                                <View style={style.eps}>
                                    <Text style={style.textEps}>Episode 1</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        : <View style={style.contDown}>
                            <View style={style.titleMp}>
                                <Text style={style.mp}>MP4 360p</Text>
                            </View>
                            <View style={style.contLink}>
                                <TouchableNativeFeedback>
                                    <View style={style.link}>
                                        <Text style={style.textLink}>ZippyShare</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <View style={style.link}>
                                    <Text style={style.textLink}>Filesim</Text>
                                </View>
                                <View style={style.link}>
                                    <Text style={style.textLink}>Racaty</Text>
                                </View>
                                <View style={style.link}>
                                    <Text style={style.textLink}>Acefile</Text>
                                </View>
                                <View style={style.link}>
                                    <Text style={style.textLink}>Mega</Text>
                                </View>
                                <View style={style.link}>
                                    <Text style={style.textLink}>MegaUp</Text>
                                </View>
                            </View>
                        </View>}
                </ScrollView>
            </View>
        )
    }
}

export default Detail
