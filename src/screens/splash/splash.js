import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import LottieView from 'lottie-react-native'
import { style } from './styleSplash'

export class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Dashboard')
        }, 5000);
    }
    render() {
        return (
            <View style={style.container}>
                <Image
                    source={require("../../assets/Logo.png")}
                    style={style.logo}
                />
                {/* <LottieView
                    source={require('../../assets/4777-loading-animation.json')}
                    style={style.lottie}
                    autoPlay
                    loop
                    autoSize
                /> */}
                <Text style={[style.title,{color: '#ffaaa5'}]}>Nyan<Text style={[style.title,{color: "#5f0404"}]}>Koi</Text></Text>
                <Text style={style.versi}>Versi 1.0.0</Text>
            </View>
        )
    }
}

export default Splash
