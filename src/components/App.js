import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { Header, BottomNavBar } from './common';

class App extends Component {
  state = {
    headerText: 'LocalEyes - Fiji'
  };

  // toggleShow = () => {
  //   console.log('toggling');
  //   this.setState(state => ({ bottomBar: !state.bottomBar }));
  // };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    );
  }
}

// const toggleShow = () => {

//   this.setState(state => ({ bottomBar: !state.bottomBar }));
// };

export default App;