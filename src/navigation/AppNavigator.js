import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Map from '../components/Map';
import ModalFeature from '../components/ModalFeature';

const RootStack = createStackNavigator({
  Home: {
    screen: Map,

    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Modal: {
    screen: ModalFeature,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.feature.properties.title
    })
  }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
