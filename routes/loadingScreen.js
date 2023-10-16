import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, BackHandler, Linking, Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VersionCheck from 'react-native-version-check';
import i18n from '../languages/i18n'
import checkVersion from '../function/versioncheck'


const Tab = createBottomTabNavigator();
const loadingscreen = 'Loading';
const homeScreen = 'Home';




class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        checkVersion();
        setTimeout(() => {
            this.props.navigation.navigate('Home')

        }, 3000);

    }

    render() {
        return (

            <View style={styles.main}>
                <ImageBackground resizeMode="cover" style={styles.background} source={require('../assets/WelcomeScreen/backscreen.jpg')}></ImageBackground>
                <Image style={styles.logoimg} source={require('../assets/WelcomeScreen/diamondicon.png')} />
                <Text style={styles.textlogo}>4CCALCULATOR</Text>
            </View >


        )
    }
}

export default LoadingScreen;
const styles = StyleSheet.create({
    main: {
        // flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    logoimg: {
        width: 200,
        height: 200,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    textlogo: {
        position: 'absolute',
        paddingTop: 200,
        fontSize: 15,
        color: '#005fe9',
        fontWeight: "500",
    }
})