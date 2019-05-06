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
          color='#fff'
        />
      ),
    },
  },
  Filters: {
    screen: BlankScreen,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Icon 
          name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
          size={26}
          color='#fff'
        />
      )
    }
  }
};

const tabNavConfig = {
  initialRouteName: 'Map',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    activeBackgroundColor: '#0b8694',
    inactiveBackgroundColor: '#0b8694',
    style: {
      backgroundColor: '#0b8694',
    }
  },
  defaultNavigationOptions: {
    tabBarOnPress: (data) => {
      const { navigation, defaultHandler } = data;

      navigation.state.key === 'Map'
      ? navigation.navigate('Map', {zoomOut: true})
      : null;
      
      navigation.state.key === 'Filters' 
      ? navigation.navigate('FilterModal') 
      : defaultHandler(navigation.state.key);
    },
    tabBarOnLongPress: () => {
      null
    }
  },
  cardStyle: {
    transparentCard: true,
  },
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
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0b8694',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  mode: 'modal',
  transparentCard: true,
  cardStyle: {
    opacity: 1,
  },
};

const MainNavigator = createStackNavigator(stackScreens, stackConfig);
export default createAppContainer(MainNavigator);