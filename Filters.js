import React, { Component } from 'react';
import { ScrollView, View, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Filters extends Component {
  state = {
    attractions_isChecked: false,
    diving_isChecked: false,
    foodAndDrink_isChecked: false,
    healthAndSafety_isChecked: false,
    Hiking_isChecked: false,
    Lodging_isChecked: false,
    Shopping_isChecked: false,
    Tours_isChecked: false,
    Transportation_isChecked: false
  };

  static navigationOptions = {
    title: 'Map Settings',
    headerLeft: null
  };

  // buttonPress = () => {
  //   this.setState({
  //     data: this.state
  //   });
  // };

  dismissModal = () => {
    // if this.state.data !== undefined
    // send state data to Map
    // else
    // navigate back to map without sending data

    this.props.navigation.navigate('Map', {
      data: this.state
    });
  };

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <View
          style={{
            height: '40%',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <ScrollView
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#rgba(255, 255, 255, 0.06)',
              alignContent: 'flex-start'
            }}
          >
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.attractions_isChecked}
                onPress={() =>
                  this.setState({
                    attractions_isChecked: !this.state.attractions_isChecked
                  })
                }
                title="Attractions"
              />
            </View>

            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.diving_isChecked}
                onPress={() =>
                  this.setState({
                    diving_isChecked: !this.state.diving_isChecked
                  })
                }
                title="Diving"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.foodAndDrink_isChecked}
                onPress={() =>
                  this.setState({
                    foodAndDrink_isChecked: !this.state.foodAndDrink_isChecked
                  })
                }
                title="Food and Drink"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.healthAndSafety_isChecked}
                onPress={() =>
                  this.setState({
                    healthAndSafety_isChecked: !this.state
                      .healthAndSafety_isChecked
                  })
                }
                title="Health and Safety"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.Hiking_isChecked}
                onPress={() =>
                  this.setState({
                    Hiking_isChecked: !this.state.Hiking_isChecked
                  })
                }
                title="Hiking"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.Lodging_isChecked}
                onPress={() =>
                  this.setState({
                    Lodging_isChecked: !this.state.Lodging_isChecked
                  })
                }
                title="Lodging"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.Shopping_isChecked}
                onPress={() =>
                  this.setState({
                    Shopping_isChecked: !this.state.Shopping_isChecked
                  })
                }
                title="Shopping"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.Tours_isChecked}
                onPress={() =>
                  this.setState({
                    Tours_isChecked: !this.state.Tours_isChecked
                  })
                }
                title="Tours"
              />
            </View>
            <View style={{ backgroundColor: '#rgba(255, 255, 255, 0.76)' }}>
              <CheckBox
                checked={this.state.Transportation_isChecked}
                onPress={() =>
                  this.setState({
                    Transportation_isChecked: !this.state
                      .Transportation_isChecked
                  })
                }
                title="Transportation"
              />
            </View>
          </ScrollView>
        </View>

        <View style={{ width: '100%' }}>
          <Button onPress={this.dismissModal} title="Close" />
        </View>
      </View>
    );
  }
}