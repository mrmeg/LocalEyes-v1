import Map from '../components/Map';
import Filters from '../components/Filters';
import BlankScreen from '../components/Blank';
import ModalFeature from '../components/ModalFeature';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const tabNavScreens = {
  Map: {
    screen: Map,
  },
  Filters: {
    screen: BlankScreen
  }
};

const tabNavConfig = {
  initialRouteName: 'Map',
  defaultNavigationOptions: {
    tabBarOnPress: (data) => {
      const { navigation, defaultHandler } = data;
      if (navigation.state.key === 'Filters') {
        navigation.navigate('FilterModal');
      } else {
        defaultHandler(navigation.state.key);
      }
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
