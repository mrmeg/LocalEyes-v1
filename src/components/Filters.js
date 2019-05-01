import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class Filters extends Component {
  static navigationOptions = {
    title: 'Map Settings',
    headerLeft: null,
  }

  state = {}

  buttonPress = () => {
    this.setState({
      data: 'Something passed to map'
    })
  }

  dismissModal = () => {
    // if this.state.data !== undefined
      // send state data to Map
    // else
      // navigate back to map without sending data

    this.props.navigation.navigate('Map', {
      data: this.state.data,
    }); 

  }


  render() {
    return (
      <View style={{ flex: 1 ,flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View style={{ height: "50%" ,width: '100%', backgroundColor: "#fff", justifyContent:"center"}}>
            <Text style={{fontSize: 26}} onPress={this.dismissModal}>
              Touch text to close the Modal
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
            <Button 
              onPress={this.buttonPress}
              title='Press me to add data to state!'
            />
          </View>
      </View>
    );
  }
}
