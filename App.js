import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Map from './components/Map';
// import Realm from 'realm';

// const locationSchema = {
//   name: 'location',
//   properties: {
//     name: 'string',
//     latitude: 'string',
//     longitude: 'string',
//   }
// }

// const realmConfig = {
//   path: 'LocalEyes.realm',
//   schema: [locationSchema],
//   schemaVersion: 0
// };


export default class App extends Component {

  state = {

  }

  // componentWillMount() {
  //   Realm.open(realmConfig, {schema: [locationSchema]})
  //     .then(realm => {
  //       realm.write(() => {
  //         const Uprising = realm.create('location', {
  //           name: 'Uprising Beach Resort',
  //           latitude: '-18.2500',
  //           longitude: '178.0830',
  //         });
  //       })
  //     })
  //     .catch(error => reject(console.warn(error)))
  //   Realm.open(realmConfig).then(realm => {
  //     let locations = realm.objects('location');
  //     console.warn(locations);
  //   })
  //   }

  render() {
    return (
      <Map />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});