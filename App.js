import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends Component {

  state = {}

  render() {
    return (
      <AppNavigator />
    )
  }
}

const styles = StyleSheet.create({});