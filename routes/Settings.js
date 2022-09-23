import React, { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, Linking, Modal, Pressable, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import i18n from '../languages/i18n'
import DropDownPicker from 'react-native-dropdown-picker';
import LanguageDropdown from '../function/languageDropdown';
import { Translation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    // const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('en');
    const [items, setItems] = useState([
        { label: 'Malay', value: 'my' },
        { label: 'English', value: 'en' },
        { label: 'Chinese', value: 'ch' },
        { label: 'Japanese', value: 'jp' }
    ]);


    const handleChangeLng = async (value) => {
        try {
            await AsyncStorage.setItem('savedLang', value)
        } catch (e) {
            //
        }
    }

    useEffect(() => {
        async function getLang() {
            try {
                const data = await AsyncStorage.getItem('savedLang')
                setValue(data);


            } catch (err) {
                console.log(err);
            }

        }

        getLang();
    }, []);


    if (value == null) {
        setValue('en');

    }

    const reset = () => {
        setValue('en')
    }
    return (
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
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
                        <Text style={styles.headTitle}>{t("Settings")}</Text>
                    </View>
                    <View style={styles.body}>
                        <View style={{ width: '100%', height: '13%', maxHeight: 80, justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#fff', zIndex: 0, elevation: 0, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', paddingHorizontal: 20, fontWeight: '600' }}>{t("Price-update")}</Text>
                            <View style={{ zIndex: 0, elevation: 0, width: -1, paddingHorizontal: 20, }}>
                                <Text style={{ color: '#fff', textAlign: 'right', fontWeight: '600', }}>{t("Price-update-date")}</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '13%', maxHeight: 80, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#fff', zIndex: 10, elevation: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', paddingHorizontal: 20, fontWeight: '600' }}>{t("Language")}</Text>
                            <View style={{ zIndex: 0, elevation: 0, width: '34%', paddingRight: 10 }}>
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    defaultValue={'en'}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    onChangeValue={(value) => {
                                        handleChangeLng(value)
                                        i18n.changeLanguage(value)
                                    }}
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderColor: '#FFF',
                                    }}
                                    containerStyle={{
                                        borderColor: '#fff',
                                        borderRadius: 10,
                                    }}
                                    textStyle={{
                                        color: '#000',
                                        borderColor: '#fff',
                                    }}
                                    labelStyle={{
                                        borderColor: '#fff',
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    }}
                                    dropDownContainerStyle={{
                                        borderColor: '#D3D3D3',
                                        backgroundColor: '#D3D3D3',
                                        width: '100%',
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{ alignItems: "center", width: '100%', height: '13%', maxHeight: 80, }}
                            onPress={() => {
                                Linking.openURL('https://play.google.com/store/apps/details?id=com.fccalculator')
                            }}>
                            <View style={{ width: '100%', height: '100%', maxHeight: 80, borderBottomWidth: 1, borderBottomColor: '#fff', zIndex: 0, elevation: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 20, fontWeight: '600' }}>{t("Share_App")}</Text>
                                <View style={{ alignItems: "center", width: '20%', paddingHorizontal: 20 }}>
                                    <Image style={{ width: 20, height: 20, resizeMode: 'contain', }} source={require('../assets/icons/arrowwhite.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: "center", width: '100%', height: '13%', maxHeight: 80, }}
                            onPress={() => {
                                Linking.openURL('mailto:developer@crane-a.co.jp?subject=Diamond Apps Inquiry&body=Inquiry details:')
                            }}>
                            <View style={{ width: '100%', height: '100%', maxHeight: 80, borderBottomWidth: 1, borderBottomColor: '#fff', zIndex: 0, elevation: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 20, fontWeight: '600' }}>{t("Contact_Author")}</Text>
                                <View style={{ alignItems: "center", width: '20%', paddingHorizontal: 20 }}>
                                    <Image style={{ width: 20, height: 20, resizeMode: 'contain', }} source={require('../assets/icons/arrowwhite.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Pressable
                            style={{ width: '100%', height: '13%', maxHeight: 80, }}
                            onPress={() => {
                                setModalVisible(true)
                                setOpen(false)
                            }}
                        >
                            <View style={{ width: '100%', height: '100%', maxHeight: 80, borderBottomWidth: 1, borderBottomColor: '#fff', zIndex: 0, elevation: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ color: '#fff', paddingHorizontal: 20, fontWeight: '600' }}>{t("Terms_and_conditions")}</Text>
                                <View style={{ alignItems: "center", width: '20%', paddingHorizontal: 20 }}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <Text style={styles.modalTextTitle}>
                                                    {t("Terms_and_conditions")}
                                                </Text>
                                                <Text style={{ marginTop: '10%', color: '#808080' }}>
                                                    {t("TNC_description")}
                                                </Text>
                                                <Pressable
                                                    style={[styles.buttonModalClose]}
                                                    onPress={() => setModalVisible(!modalVisible)}
                                                >
                                                    <Text style={styles.Textmodalclose}> {t("close")}</Text>

                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                    <Image style={{ width: 20, height: 20, resizeMode: 'contain', }} source={require('../assets/icons/arrowwhite.png')} />
                                </View>
                            </View>

                        </Pressable>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={{ alignItems: 'center', color: '#FFF', height: '100%', justifyContent: 'center' }}
                                onPress={reset}
                            >
                                <Text style={{ color: '#fff', fontWeight: '600' }}>
                                    {t("Reset")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '25%', width: '100%', justifyContent: 'flex-end', alignItems: 'center', }}>
                            <Text style={{ color: '#fff', justifyContent: 'center', }}>
                                V1.1
                            </Text>
                        </View>

                    </View>
                </ImageBackground >
            </SafeAreaView >
        </TouchableWithoutFeedback >
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    background: {
        flex: 1,
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
        width: '100%',
    },
    body: {
        flex: 1,
        alignItems: 'flex-start',

    },
    button: {
        width: '80%',
        height: 50,
        marginTop: 30,
        // marginLeft: 35,
        marginHorizontal: 35,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
    },
    modalView: {
        marginHorizontal: 20,
        // marginTop: '15%',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonModalClose: {
        width: 100,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        marginTop: 30,
        alignItems: 'center',//for horizontal align
        justifyContent: 'center', //for vertical align
    },
    Textmodalclose: {
        width: '100%',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '600'
    },
    modalTextTitle: {
        textDecorationLine: 'underline',
        fontSize: 16,
        color: '#808080'
    },
    centeredView: {
        height: '100%',
        backgroundColor: '#D1C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',

    },
});