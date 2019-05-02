import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Realm from 'realm';
import mapLines from '../database/geoJson/mapLines.json';
import foodAndDrink from '../database/geoJson/foodAndDrink.json';
import lodging from '../database/geoJson/lodging.json';
import { locationSchema } from '../database/models/location';
import { realmConfig } from '../database/realmConfig';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXJtZWciLCJhIjoiY2p1OTFrZ3lvMmI2ZDN5b2IyMTJqbGx3aCJ9.JMyS6W3wxERau3-2nuzSsA'
);

export default class Map extends Component {

  state = {}

  getNavigationParams() {
    return this.props.navigation.state.params || {}
  }

  componentWillReceiveProps() {
    if(this.props.navigation.navigate) {
      console.warn(this.props.navigation.state)
      this.zoomOut()
    }
  }

  componentWillMount() {
    console.log(this.state);
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

  zoomOut = () => {
    this._map.getZoom().then((zoom) => {
      this._map.zoomTo(zoom-.5)
    })
  }

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
      },
      excluded: {
        visibility: 'none'
      }
    });

    // const rasterSourceProps = {
    //   id: 'terrainSource',
    //   // url: '',
    //   url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
    //   // url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //   tileSize: 256,
    // };

    return (
      <MapboxGL.MapView
        ref={c => (this._map = c)}
        styleURL="mapbox://styles/mrmeg/cjv5cwiqp02b61gmv3c75alpo"
        centerCoordinate={[178.065, -17.7134]}
        pitchEnabled={false}
        rotateEnabled={false}
        zoomLevel={7.25}
        style={{ flex: 1 }}
        onPress={this.onPress}
      >
        {/* <MapboxGL.RasterSource {...rasterSourceProps}>
        <MapboxGL.RasterLayer
          id="terrainSource"
          sourceID="terrainSource"
          style={{rasterOpacity: 1}}
        />
          </MapboxGL.RasterSource> */}

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
            style={layerStyles.excluded}
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