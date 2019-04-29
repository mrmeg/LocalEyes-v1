import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Blank extends Component {
  render() {
    return (
      <View>
        <Text> This component should never be seen! </Text>
      </View>
    )
  }
}
