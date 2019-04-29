import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Map from '../components/Map';
import Filters from '../components/Filters'; 
import ModalFeature from '../components/ModalFeature';

const MapStack = createStackNavigator({
  Home: {
    screen: Map,
  },
  Modal: {
    screen: ModalFeature,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.feature.properties.Name,
    })
  }
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <Icon 
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
      size={26}
      color='#4F8EF7'
    />
  )
}

const FilterStack = createStackNavigator({
  Home: {
    screen: Filters,
  },
  Modal: {
    screen: Filters,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.feature.properties.Name,
      tabBarLabel: ''
    })
  }
});

FilterStack.navigationOptions = {
  tabBarLabel: 'Filters',
  tabBarIcon: ({ focused }) => (
    <Icon 
      name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
      size={26}
      color='#4F8EF7'
    />
  )
}

export default createBottomTabNavigator({
  MapStack,
  FilterStack
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
});