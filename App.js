import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
//import {AppTabNavigator} from './components/AppTabNavigator'
import {AppDrawerNavigator} from "./components/appDrawerNavigator"

export default function App() {
  return (
<AppContainer/>
  );
}
const SwitchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer=createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});