import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class ModalScreen extends Component {

  static navigationOptions = ({})

  render() {

    const { navigation } = this.props;
    const properties = navigation.state.params.feature.properties;

    return (
      <View style={styles.container}>
        <Text> This page will show data for {properties.description}. </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  }
})