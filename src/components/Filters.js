import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Filters extends Component {
  static navigationOptions = {
    title: 'Map Settings'
  }

  render() {
    return (
      <View>
        <Text> Controls for the map will go on this screen </Text>
      </View>
    )
  }
}
