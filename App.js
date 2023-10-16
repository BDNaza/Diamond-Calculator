
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationTab from './navigations/navigationTab';
import SettingsScreen from './routes/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import screen
import HomeScreen from './routes/Home'
import CalculatorScreen from './routes/Calculator'
import LoadingScreen from './routes/loadingScreen'

const homeScreen = 'Home';
const calculatorScreen = 'Calculator';
const SetttingScreen = 'Settings';
const loadingscreen = 'Loading';

const Tab = createBottomTabNavigator();


function App() {



  return (
    <>
      <NavigationTab />
    </>

  );
}

export default App;