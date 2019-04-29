import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Realm from 'realm';
// import mapPoints from '../database/geoJson/mapPoints.json';
import mapLines from '../database/geoJson/mapLines.json';
import foodAndDrink from '../database/geoJson/foodAndDrink.json';
import lodging from '../database/geoJson/lodging.json';
import { locationSchema } from '../database/models/location';
import { realmConfig } from '../database/realmConfig';
// import App from './App';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXJtZWciLCJhIjoiY2p1OTFrZ3lvMmI2ZDN5b2IyMTJqbGx3aCJ9.JMyS6W3wxERau3-2nuzSsA'
);

export default class Map extends Component {
  static navigationOptions = {
    title: 'LocalEyes — Fiji'
  }

  componentWillMount() {
    Realm.open(realmConfig).then(realm => {
      const locations = realm.objects(locationSchema.name);
      this.setState({
        locations: locations
      });
    });
  }

  onMarkerPress = event => {
    const feature = event.nativeEvent.payload;
    this.props.navigation.navigate('Modal', { feature });
  };

  onLinePress = event => {
    const feature = event.nativeEvent.payload;
    this.props.navigation.navigate('Modal', { feature });
  };

  render() {
    const layerStyles = MapboxGL.StyleSheet.create({
      icon: {
        iconImage: '{icon}',
        iconAllowOverlap: true,
        iconSize: 1.5,
        iconIgnorePlacement: true
      },
      line: {
        lineWidth: 2
      }
    });

    return (
      <MapboxGL.MapView
        centerCoordinate={[178.065, -17.7134]}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomLevel={7.25}
        style={{ flex: 1 }}
        onPress={this.onPress}
      >

       <MapboxGL.ShapeSource
          id="lodging"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={lodging}
        >
          <MapboxGL.SymbolLayer
            id="lodging"
            minZoomLevel={1}
            style={layerStyles.icon}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="Food and Drink"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={foodAndDrink}
        >
          <MapboxGL.SymbolLayer
            id="Food and Drink"
            minZoomLevel={1}
            style={layerStyles.icon}

          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="trails"
          minZoomLevel={1}
          shape={mapLines}
          onPress={this.onLinePress}
        >
          <MapboxGL.LineLayer
            id="trailsLine"
            minZoomLevel={14}
            style={layerStyles.line}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
    );
  }
}