import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation"
import ItWorked from './auth/itworked'
import Chatdisplay from './chat/chatdisplay'




const TabNavigator = createBottomTabNavigator({
  Logout: { screen: props => <ItWorked />},
  Chat: { screen: props => <Chatdisplay />}

})

export default createAppContainer(TabNavigator);
