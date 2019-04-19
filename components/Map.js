import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Realm from 'realm';
import mapPoints from '../database/geoJson/mapPoints.json';
import mapLines from '../database/geoJson/mapLines.json';
import iconImage from '../assets/icon.png';

const locationSchema = {
  name: 'location',
  properties: {
    name: 'string',
    latitude: 'string',
    longitude: 'string',
  }
}

const realmConfig = {
  path: 'LocalEyes.realm',
  schema: [locationSchema],
  schemaVersion: 0,
}

MapboxGL.setAccessToken('pk.eyJ1IjoibXJtZWciLCJhIjoiY2p1OTFrZ3lvMmI2ZDN5b2IyMTJqbGx3aCJ9.JMyS6W3wxERau3-2nuzSsA');

export default class Map extends Component {

  state = {
    featureCollection: MapboxGL.geoUtils.makeFeatureCollection(),
    featureObject: {
      type: "Feature",
      geometry: {
          type: "Point",
          coordinates: [178.0650, -17.7134]
      },
    }
  }

  componentWillMount() {
    // Realm.open(realmConfig).then(realm => {
    //   realm.write(() => {
    //     realm.create('location', {
    //       name: 'Uprising Beach Resort',
    //       latitude: '-18.2500',
    //       longitude: '178.0830',
    //     })
    //     let locations = realm.objects('location')
    //     console.warn(locations)
    //   })
    // })

    // Realm.open(realmConfig).then(realm => {
    //   realm.write(() => {
    //     let locations = realm.objects('location');
    //     realm.delete(locations);
    //   })
    //   let locations = realm.objects('location')
    //   console.warn(locations)
    // })

    Realm.open(realmConfig).then(realm => {
      let locations = realm.objects('location');
      this.setState({
        // locations: locations,
      })
      // console.warn(this.state.locations);
    })
  } // Close componentWillMount()

  onMarkerPress = (event) => {
    const feature = event.nativeEvent.payload;
    console.warn(feature.properties.description);
  }

  onLinePress = (event) => {
    const feature = event.nativeEvent.payload;
    console.warn(feature.properties.description)

  }

  render() {

    const layerStyles = MapboxGL.StyleSheet.create({
      icon: {
        // iconImage: require('../assets/icon.png'),
        iconImage: '{icon}',
        iconAllowOverlap: true,
        iconSize: 1,
        iconIgnorePlacement: true
      },
      line: {
        lineWidth: 2
      }
    });

    return (
      <MapboxGL.MapView
        centerCoordinate={[178.0650, -17.7134]}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomLevel={7}
        style={{ flex: 1 }}
        onPress={this.onPress}
      >

        <MapboxGL.ShapeSource
          id='locations'
          hitbox={{width: 20, height: 20}}
          onPress={this.onMarkerPress}
          shape={mapPoints}
        >
          <MapboxGL.SymbolLayer
            id='locationIcon'
            minZoomLevel={1}
            style={layerStyles.icon}
          />
        </MapboxGL.ShapeSource>

      <MapboxGL.ShapeSource
        id='trails'
        minZoomLevel={1}
        shape={mapLines}
        onPress={this.onLinePress}
      >
        <MapboxGL.LineLayer 
        id='trailsLine'
        minZoomLevel={14}
        style={layerStyles.line}
        />
      </MapboxGL.ShapeSource>
     
    </MapboxGL.MapView>
    )
  }
}

const styles = MapboxGL.StyleSheet.create({

})

