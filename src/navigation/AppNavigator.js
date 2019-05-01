import React from 'react';
import { Platform } from 'react-native';
import Map from '../components/Map';
import Filters from '../components/Filters';
import BlankScreen from '../components/Blank';
import ModalFeature from '../components/ModalFeature';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const tabNavScreens = {
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon 
          name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
          size={26}
          color='#4F8EF7'
        />
      )
    }
  },
  Filters: {
    screen: BlankScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon 
          name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
          size={26}
          color='#4F8EF7'
        />
      )
    }
  }
};

const tabNavConfig = {
  initialRouteName: 'Map',
  defaultNavigationOptions: {
    tabBarOnPress: (data) => {
      const { navigation, defaultHandler } = data;
      navigation.state.key === 'Filters' 
      ? navigation.navigate('FilterModal') 
      : defaultHandler(navigation.state.key);
    }
  },
  cardStyle: {
    transparentCard: true,
  }
};

const TabNavigator = createBottomTabNavigator(tabNavScreens, tabNavConfig);

const stackScreens = {
  Tabs: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'LocalEyes — Fiji',
    }
  },
    Modal: {
    screen: ModalFeature,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.feature.properties.Name,
    })
  },
  FilterModal: {
    screen: Filters,
  }
};

const stackConfig = {
  headerMode: 'float',
  initialRouteName: 'Tabs',
  mode: 'modal',
  transparentCard: true,
  cardStyle: {
    opacity: 1,
  }
};

const MainNavigator = createStackNavigator(stackScreens, stackConfig);
export default createAppContainer(MainNavigator);