import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import ModalScreen from './ModalScreen';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

// create TabNavigator
const screens = {
  Tab1: {
    screen: Screen1
  },
  Tab2: {
    screen: Screen2
  },
  Tab3: {
    screen: Screen3
  }
};

const config = {
  headerMode: 'none',
  initialRouteName: 'Tab1',
  defaultNavigationOptions: {
    tabBarOnPress: (data) => {
      // this is where the magic happens
      const { navigation, defaultHandler } = data;
      // we check to see if the navigation key is going to be on Tab3
      if (navigation.state.key === 'Tab3') {
        // if it is we show the ModalScreen by navigating to it
        navigation.navigate('ModalScreen');
      } else {
        // otherwise we call the defaultHandler and navigate to the tab we pressed
        defaultHandler(navigation.state.key);
      }
    }
  }
};

const TabNavigator = createBottomTabNavigator(screens, config);

// create StackNavigator
const stackScreens = {
  Tabs: {
    screen: TabNavigator
  },
  ModalScreen: {
    screen: ModalScreen
  }
};

// we need to set the mode to be modal so that it will present the screen as a modal.
const stackConfig = {
  headerMode: 'none',
  initialRouteName: 'Tabs',
  mode: 'modal'

};

const MainNavigator = createStackNavigator(stackScreens, stackConfig);
export default createAppContainer(MainNavigator);
