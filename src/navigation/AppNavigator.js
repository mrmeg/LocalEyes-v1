import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Filters from '../components/Filters';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createStackNavigator({
  Main: MainTabNavigator,
}, {
  headerMode: 'none',
}
));