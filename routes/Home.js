import * as react from 'react';
import React, { useState, useEffect, Component, Dimensions } from 'react';
import { Text, View, StyleSheet, Appearance, ImageBackground, Image, SafeAreaView, TouchableOpacity, } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import DynamicallySelectedPicker from '../function/DD';
import checkVersion from '../function/versioncheck'
import i18next from 'i18next';
import { useFocusEffect } from '@react-navigation/native';



export default function HomeScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [stateSelectedPicker, setStateSelectedPicker] = useState({
        selectedColorIndex: 1,
        selectedClarityIndex: 1,
        selectedCaratIndex: 1,
        selectedShapeIndex: 1,
    });
    const [data, setData] = useState("")
    const [symbol, setSymbol] = useState("")
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [monthEN, setMonthEN] = useState('');
    const [monthMY, setMonthMY] = useState('');

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
    const shape = stateSelectedPicker.selectedShapeIndex
    const color = stateSelectedPicker.selectedColorIndex
    const clarity = stateSelectedPicker.selectedClarityIndex
    const carat = stateSelectedPicker.selectedCaratIndex

    const getPrice = () => {
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
                        item.id_shape === JSON.stringify(shape) &&
                        item.id_color === JSON.stringify(color) &&
                        item.id_clarity === JSON.stringify(clarity) &&
                        item.id_carat === JSON.stringify(carat)

                );
                const diamondPrice = JSON.stringify(filtered[0].price)
                setData(diamondPrice.replace(/\"/g, ""));
                setSymbol('$')


            })
            .catch((error) => {
                console.error(error);
            });

    };

    const getDates = () => {

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
                        item.id_shape === 1 &&
                        item.id_color === 1 &&
                        item.id_clarity === 1 &&
                        item.id_carat === 1
                );
                //convert date from api to log format
                const date = (JSON.stringify(responseJson.data[0].updated_at)).slice(1, 11).toString();
                var day = date.slice(8, 10).replace(/^0+/, '');
                var month = date.slice(5, 7).replace(/^0+/, '');
                var year = date.slice(0, 4);
                const formatterMY = new Intl.DateTimeFormat('ms-MY', { month: 'long' });
                const formatterEN = new Intl.DateTimeFormat('en-MY', { month: 'long' });
                var monthNameMY = formatterMY.format(new Date(date));
                var monthNameEN = formatterEN.format(new Date(date));

                setDay(day);
                setMonth(month);
                setYear(year);
                setMonthEN(monthNameEN);
                setMonthMY(monthNameMY);


            })
            .catch((error) => {
                console.error(error);
            });

    };

    useEffect(() => {
        checkVersion();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getDates();
        }, [])
    );


    return (
        <SafeAreaView style={styles.main} >
            <ImageBackground source={require('../assets/WelcomeScreen/main-bg.jpg')} resizeMode="cover" style={styles.background}>
                <View style={styles.head}>
                    <Image
                        source={require('../assets/navIcon/DiamondIcon.png')}
                        style={{
                            width: '8%',
                            height: '70%',
                            maxHeight: 40,
                            maxWidth: 40,
                            marginLeft: 80,
                            resizeMode: 'contain',
                            tintColor: '#fff',
                        }} />

                    <Text
                        allowFontScaling={true}
                        adjustsFontSizeToFit={true}
                        style={styles.headTitle}>
                        {t("Price")}
                    </Text>
                </View>
                <View style={styles.body}>
                    {/* <Text
                        allowFontScaling={true}
                        adjustsFontSizeToFit={true} */}
                    {i18next.language == "en" ? (<Text allowFontScaling={true}
                        adjustsFontSizeToFit={true} style={styles.bodyTitle}>{t("Price-update")}{'\n'} {day} {monthEN} {year}</Text>) : i18next.language == "my" ? (<Text allowFontScaling={true}
                            adjustsFontSizeToFit={true} style={styles.bodyTitle}>{t("Price-update")}{'\n'} {day} {monthMY} {year}</Text>) : i18next.language == 'ch' ? (<Text allowFontScaling={true}
                                adjustsFontSizeToFit={true} style={styles.bodyTitle}>{t("Price-update")}{'\n'} {year} {t("year-symbol")} {month} {t("month-symbol")} {day} {t("day-symbol")}</Text>) : i18next.language == 'jp' ? (<Text allowFontScaling={true}
                                    adjustsFontSizeToFit={true} style={styles.bodyTitle}>{t("Price-update")}{'\n'} {year} {t("year-symbol")} {month} {t("month-symbol")} {day} {t("day-symbol")}</Text>) : null}


                    {/* // style={styles.bodyTitle}>{t("Price-update")}{'\n'}{t("Price-update-date")}</Text> */}
                    <View style={styles.scrollArea}>
                        <View style={styles.pickertitle}>
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaShapeTitle}>{t("Shape")}</Text>
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaColorTitle}>{t("Color")}</Text>
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaClarityTitle}>{t("Clarity")}</Text>
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaCaratTitle}>{t("Carat")}</Text>
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
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.buttonText}>{t("Calculate")}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text
                        allowFontScaling={true}
                        adjustsFontSizeToFit={true}
                        style={styles.resultNote}>
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
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaTitle2}>{"USD"}</Text>
                        </View>
                        <View style={{ width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                            <Text
                                allowFontScaling={true}
                                adjustsFontSizeToFit={true}
                                style={styles.scrollAreaTitle2}>{symbol}{data}</Text>
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
        flex: 1,
        width: '100%',
        height: '8%',
        maxHeight: 60,
        borderBottomColor: '#fff',
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
        // fontSize: RFValue(22, 580),
        width: '100%',

    },
    body: {
        flex: 10,//new flex
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bodyTitle: {
        color: '#fff',
        fontSize: RFValue(20, 580),
        width: '70%',
        textAlign: 'center',
        marginTop: '2%',
        marginBottom: '1%',
    },
    scrollArea: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: '90%',
        height: '50%',
        maxHeight: 270,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#fff',
    },
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
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

    scrollAreaShapeTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
        width: '20%',
        maxWidth: 80,
        fontFamily: 'Open Sans Light',
        zIndex: 2,
    },
    scrollAreaColorTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
        width: '20%',
        maxWidth: 80,
        fontFamily: 'Open Sans Light',
        zIndex: 2,
    },
    scrollAreaClarityTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
        width: '20%',
        maxWidth: 80,
        fontFamily: 'Open Sans Light',
        zIndex: 2,
    },
    scrollAreaCaratTitle: {
        color: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
        width: 80,
        fontFamily: 'Open Sans Light',
        zIndex: 2,
    },
    scrollAreaTitle2: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
        width: '40%',
    },
    scrollAreaTitle3: {
        color: '#000',
        textAlign: 'center',
        fontSize: RFValue(15, 580),

    },
    button: {
        width: '90%',
        height: '9%',
        maxHeight: 60,
        marginTop: '4%',
        backgroundColor: 'blue',
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        // fontSize: RFValue(14, 580),
    },
    resultNote: {
        width: '90%',
        color: '#fff',
        marginVertical: '2%',
        fontWeight: '600',
        fontSize: 16,
        // fontSize: RFValue(12, 580),
    },
    priceListMain: {
        flexDirection: 'row',
        width: '90%',
        height: '10%',
        maxHeight: 60,
        backgroundColor: '#fff',
        borderRadius: 5,
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
        justifyContent: 'space-evenly',
        marginTop: 5,
        paddingHorizontal: 10
    }
});
