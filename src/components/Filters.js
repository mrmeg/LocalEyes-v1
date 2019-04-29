import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Filters extends Component {
  static navigationOptions = {
    title: 'Map Settings',
    headerLeft: null,
  }

  dismissModal = () => {
    this.props.navigation.navigate('Map')
  }

  render() {
    return (
      <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View style={{ height: "50%" ,width: '100%', backgroundColor: "#fff", justifyContent:"center"}}>
            <Text style={{fontSize: 26}} onPress={this.dismissModal}>
              Touch text to close the Modal
            </Text>
          </View>
      </View>
    );
  }
}
