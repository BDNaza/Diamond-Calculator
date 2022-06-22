import * as react from 'react';
import React, { useState, useEffect, Component, Dimensions } from 'react';
import { Text, View, StyleSheet, Button, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import DynamicallySelectedPicker from '../function/DD'


const bgimg = { uri: 'https://www.crane-a.co.jp/en/wp-content/themes/lotus_tcd039a/img/diamondapp/mobile/main-bg.jpg' };

export default function HomeScreen({ navigation }) {
    const { t, i18n } = useTranslation();

    const [stateSelectedPicker, setStateSelectedPicker] = useState({
        selectedColorIndex: 1,
        selectedClarityIndex: 1,
        selectedCaratIndex: 1,
        selectedShapeIndex: 1,
    });

    function updateSelectedShape(index) {
        setStateSelectedPicker((prev) => ({ ...prev, selectedShapeIndex: index }));
    };

    async function updateSelectedColor(index) {
        setStateSelectedPicker(prev => ({ ...prev, selectedColorIndex: index }));
    };

    async function updateSelectedClarity(index) {
        setStateSelectedPicker(prev => ({ ...prev, selectedClarityIndex: index }));
    };

    async function updateSelectedCarat(index) {
        setStateSelectedPicker(prev => ({ ...prev, selectedCaratIndex: index }));

    };

    const color = stateSelectedPicker.selectedColorIndex
    const clarity = stateSelectedPicker.selectedClarityIndex
    const carat = stateSelectedPicker.selectedCaratIndex

    const getPrice = () => {

        { console.log('zzzzz Home', color) }
        { console.log('Test Clarity Home', clarity) }
        { console.log('Test Carat Home', carat) }

        fetch('https://www.jewel-cafe-staff.com/api/showPrice', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                const filtered = responseJson.data.filter(
                    (item) =>
                        item.id_shape === "1" &&
                        item.id_color === JSON.stringify(color) &&
                        item.id_clarity === JSON.stringify(clarity) &&
                        item.id_carat === JSON.stringify(carat)
                );
                const diamondPrice = JSON.stringify(filtered[0].price)
                setData(diamondPrice.replace(/\"/g, ""));
                setSymbol('$')
                console.log("Filtered Data Price: ", data);
            })
            .catch((error) => {
                console.error(error);
            });

    };

    const [data, setData] = useState("")
    const [symbol, setSymbol] = useState("")

    // useEffect(() => {

    //    getPrice();

    // }, [getPrice]);
    // }

    return (
        <SafeAreaView style={styles.main} >
            <ImageBackground source={bgimg} resizeMode="cover" style={styles.background}>
                <View style={styles.head}>
                    <Image
                        source={require('../assets/navIcon/DiamondIcon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            marginLeft: 80,
                            resizeMode: 'contain',
                            tintColor: '#fff',
                        }} />

                    <Text style={styles.headTitle}>
                        {t("Price")}
                    </Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyTitle}>{t("Price-update")}{'\n'}{t("Price-update-date")}</Text>
                    <View style={styles.scrollArea}>
                        <View style={styles.pickertitle}>
                            <Text style={styles.scrollAreaTitle}>{t("Shape")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Color")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Clarity")}</Text>
                            <Text style={styles.scrollAreaTitle}>{t("Carat")}</Text>
                        </View>
                        <View>
                            <DynamicallySelectedPicker
                                {...stateSelectedPicker}
                                updateSelectedShape={updateSelectedShape}
                                updateSelectedColor={updateSelectedColor}
                                updateSelectedClarity={updateSelectedClarity}
                                updateSelectedCarat={updateSelectedCarat}
                            />
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={{ alignItems: 'center', color: '#FFF', height: '100%', justifyContent: 'center' }}
                            onPress={getPrice}
                        >
                            <Text style={styles.buttonText}>{t("Calculate")}
                            </Text>
                        </TouchableOpacity>
                        {/* <button onClick={getPrice}></button> */}
                    </View>
                    <Text style={styles.resultNote}>
                        {t("Diamond_price")} {"\n"}
                        {t("Diamond_price/carat")}
                    </Text>
                    <View style={styles.priceListMain}>

                        <View
                            style={{
                                width: "40%",
                                height: "100%",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRightWidth: 1,
                                borderRightColor: "#808080",
                            }}
                        >
                            <Image source={require('../assets/currency/usa.jpg')}></Image>
                            <Text style={styles.scrollAreaTitle2}>{"USD"}</Text>
                        </View>
                        <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={styles.scrollAreaTitle2}>{symbol}{data}</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                </View>

                <View style={styles.nav} >

                </View>
            </ImageBackground >

        </SafeAreaView >

    );

}




const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    head: {
        // flex: 0.12,
        width: '100%',
        height: '8%',
        borderBottomColor: '#fff',
        // paddingBottom: 10,
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headTitle: {
        color: '#fff',
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 30,
        // position: 'absolute',
        width: '100%',
        // height: 40,
        // backgroundColor: 'red',

    },
    body: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyTitle: {
        color: '#fff',
        fontSize: 25,
        width: '70%',
        textAlign: 'center',
        paddingVertical: 10,
    },
    scrollArea: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',
        width: '90%',
        height: 280,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
        // ...Platform.select({
        //     ios: {
        //         // display: 'red'
        //     },
        //     android: {
        //         display: 'none'
        //     },
        //     default: {
        //         // other platforms, web for example
        //         // backgroundColor: 'blue'
        //     }
        // })
    },
    // pickerSingle: {
    //     height: '50%',
    //     width: '20%',
    // },
    pickerSingleShape: {
        height: '100%',
        width: '17%',
    },
    pickerSingleColor: {
        height: '100%',
        width: '14%',
        alignItems: 'center'
    },
    pickerSingleClarity: {
        height: '100%',
        width: '17%',

    },
    pickerSingleCarat: {
        height: '100%',
        width: '25%',
        backgroundColor: '#fff'
    },
    pickerCarat: {
        // marginVertical: 30,
        width: 90,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
        textAlign: 'left',
        overlayColor: 'black',
        borderRadius: 0,
    },

    pickerColor: {
        // marginVertical: 30,
        width: 40,
        // width: 90,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
        textDecorationColor: 'black',
        textAlign: 'left',
    },

    pickerClarity: {
        // marginVertical: 30,
        width: 70,
        // width: 90,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
    },

    pickerShape: {
        // marginVertical: 30,
        width: 65,
        // width: 90,
        borderTopWidth: 2,
        borderTopColor: '#005fe9',
        borderBottomWidth: 2,
        borderBottomColor: '#005fe9',
        height: 40,
        marginTop: 80,
    },

    scrollAreaTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        paddingVertical: 15,
        width: '22%',
        fontFamily: 'Open Sans Light',
        // fontWeight:'600'
        // backgroundColor: 'green',
    },
    scrollAreaTitle2: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        paddingVertical: 15,
        width: '40%',
    },
    scrollAreaTitle3: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        // paddingVertical: 15,
        // width: '80%',

    },
    button: {
        width: '90%',
        height: 50,
        marginTop: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    resultNote: {
        width: '90%',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10,
        // fontFamily:'opensans',
        fontWeight: '600',
        fontSize: 15
    },
    priceListMain: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    pickerItems: {
        color: '#616161',
        fontSize: 10,
    },
    nav: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    pickertitle: {
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'space-evenly',
    }
});
