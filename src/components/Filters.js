import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Filters extends Component {
  state = {
    attractions: false,
    diving: false,
    foodAndDrink: false,
    healthAndSafety: false,
    Hiking: false,
    lodging: false,
    Shopping: false,
    Tours: false,
    Transportation: false,
  };

  static navigationOptions = {
    title: 'Map Settings',
    headerLeft: null
  };

  dismissModal = () => {
    this.props.navigation.navigate('Map', {
      filters: this.state,
      zoomOut: false
    });
  };

  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', width: '100%' }}
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
              alignContent: 'flex-end'
            }}
          >
            <View style={styles.background}>
              <CheckBox
                checked={this.state.attractions}
                onPress={() =>
                  this.setState({
                    attractions: !this.state.attractions
                  })
                }
                title="Attractions"
              />
            </View>

            <View style={styles.background}>
              <CheckBox
                checked={this.state.diving}
                onPress={() =>
                  this.setState({
                    diving: !this.state.diving
                  })
                }
                title="Diving"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.foodAndDrink}
                onPress={() =>
                  this.setState({
                    foodAndDrink: !this.state.foodAndDrink
                  })
                }
                title="Food and Drink"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.healthAndSafety}
                onPress={() =>
                  this.setState({
                    healthAndSafety: !this.state
                      .healthAndSafety
                  })
                }
                title="Health and Safety"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.Hiking}
                onPress={() =>
                  this.setState({
                    Hiking: !this.state.Hiking
                  })
                }
                title="Hiking"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.lodging}
                onPress={() =>
                  this.setState({
                    lodging: !this.state.lodging
                  })
                }
                title="Lodging"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.Shopping}
                onPress={() =>
                  this.setState({
                    Shopping: !this.state.Shopping
                  })
                }
                title="Shopping"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.Tours}
                onPress={() =>
                  this.setState({
                    Tours: !this.state.Tours
                  })
                }
                title="Tours"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.Transportation}
                onPress={() =>
                  this.setState({
                    Transportation: !this.state
                      .Transportation
                  })
                }
                title="Transportation"
              />
            </View>
          </ScrollView>
        </View>

        <View style={{ width: '100%', marginBottom: 5 }}>
          <Button
            color='#fff'
            onPress={this.dismissModal} title="Close" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#rgba(255, 255, 255, 0.76)',
  }
})