import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Filters extends Component {
  state = {
    attractions: false,
    diving: false,
    foodAndDrink: false,
    healthAndSafety: false,
    hiking: false,
    lodging: false,
    shopping: false,
    tours: false,
    transportation: false,
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
                checked={this.state.hiking}
                onPress={() =>
                  this.setState({
                    hiking: !this.state.hiking
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
                checked={this.state.shopping}
                onPress={() =>
                  this.setState({
                    shopping: !this.state.shopping
                  })
                }
                title="Shopping"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.tours}
                onPress={() =>
                  this.setState({
                    tours: !this.state.tours
                  })
                }
                title="Tours"
              />
            </View>
            <View style={styles.background}>
              <CheckBox
                checked={this.state.transportation}
                onPress={() =>
                  this.setState({
                    transportation: !this.state
                      .transportation
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