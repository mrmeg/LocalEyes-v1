import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Map from '../components/Map';
import ModalScreen from '../components/ModalScreen';
 
const RootStack = createStackNavigator({
  Home: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Modal: {  
    screen: ModalScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Modal'
    })
  },
})

const AppNavigator = createAppContainer(RootStack)

export default AppNavigator;