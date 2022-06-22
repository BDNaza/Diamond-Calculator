import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

//import screen
import HomeScreen from '../routes/Home'
import CalculatorScreen from '../routes/Calculator'
import SettingsScreen from '../routes/Settings'
import LoadingScreen from '../routes/loadingScreen'
import { useEffect } from 'react/cjs/react.production.min';

//screen name

const homeScreen = 'Home';
const calculatorScreen = 'Calculator';
const SetttingScreen = 'Settings';
const loadingscreen = 'Loading';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    const { t, i18n } = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={loadingscreen}
                screenOptions={{
                    // tabBarButton: () => null,//test hide navigation
                    // tabBarVisible: false,//test hide navigation
                    tabBarShowLabel: false,
                    headerShown: false,
                    style: {
                        height: 100,
                        display: 'none',

                    }

                }} >
                <Tab.Screen name={homeScreen} component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 5,

                                }}>
                                <Image
                                    source={require('../assets/navIcon/DiamondIcon.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginBottom: 0,
                                        marginTop: 5,
                                        resizeMode: 'contain',
                                        tintColor: focused ? '#1e2f97' : '#808080',
                                    }} />
                                <Text
                                    style={{
                                        color: focused ? '#1e2f97' : '#808080',
                                        fontSize: 12,
                                        marginBottom: 10,
                                    }}
                                >{t("Home")}</Text>
                            </View>
                        ),
                    }}

                />
                <Tab.Screen name={calculatorScreen} component={CalculatorScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 5,

                                }}>
                                <Image
                                    source={require('../assets/navIcon/CalculatorIcon.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginBottom: 0,
                                        marginTop: 5,
                                        resizeMode: 'contain',
                                        tintColor: focused ? '#1e2f97' : '#808080',
                                    }} />
                                <Text
                                    style={{
                                        color: focused ? '#1e2f97' : '#808080',
                                        fontSize: 12,
                                        marginBottom: 10,
                                    }}
                                >{t("Calculator")}</Text>
                            </View>
                        ),
                    }} />
                <Tab.Screen name={SetttingScreen} component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 5,

                                }}>
                                <Image
                                    source={require('../assets/navIcon/SettingIcon.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginBottom: 0,
                                        marginTop: 5,
                                        resizeMode: 'contain',
                                        tintColor: focused ? '#1e2f97' : '#808080',
                                    }} />
                                <Text
                                    style={{
                                        color: focused ? '#1e2f97' : '#808080',
                                        fontSize: 12,
                                        marginBottom: 10,
                                    }}
                                >{t("Settings")}</Text>
                            </View>
                        ),
                    }} />
                <Tab.Screen name={loadingscreen} component={LoadingScreen}
                    options={{
                        tabBarStyle: { display: 'none' },
                        tabBarButton: () => null,
                        tabBarVisible: false,
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 5,
                                }}>
                                <Image
                                    source={require('../assets/navIcon/SettingIcon.png')}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginBottom: 0,
                                        marginTop: 5,
                                        resizeMode: 'contain',
                                        tintColor: focused ? '#1e2f97' : '#808080',
                                    }} />
                                <Text
                                    style={{
                                        color: focused ? '#1e2f97' : '#808080',
                                        fontSize: 12,
                                        marginBottom: 10,
                                    }}
                                >Loading</Text>
                            </View>
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}