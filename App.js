
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationTab from './navigations/navigationTab';

//import screen
import HomeScreen from './routes/Home'
import CalculatorScreen from './routes/Calculator'
import SettingsScreen from './routes/Settings'
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