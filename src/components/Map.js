import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Realm from 'realm';
import iconStyles from '../styles/iconStyles';
import mapLines from '../database/geoJson/mapLines.json';
import foodAndDrink from '../database/geoJson/foodAndDrink.json';
import lodging from '../database/geoJson/lodging.json';
import { locationSchema } from '../database/models/location';
import { realmConfig } from '../database/realmConfig';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXJtZWciLCJhIjoiY2p1OTFrZ3lvMmI2ZDN5b2IyMTJqbGx3aCJ9.JMyS6W3wxERau3-2nuzSsA'
);

export default class Map extends React.Component {

  state = {
    locations: {},
    filters: {
      attractions: false,
      diving: false,
      foodAndDrink: false,
      healthAndSafety: false,
      Hiking: false,
      Lodging: false,
      Shopping: false,
      Tours: false,
      Transportation: false,
    },
  }

  componentDidUpdate() {
    let zoomOut = this.props.navigation.getParam('zoomOut', null)
    zoomOut ? this.zoomOut() : null

    // let filters = this.props.navigation.getParam('filters', null)
    // this.setFiltersToState(filters)

    // console.warn(this.state)
  }

  // componentWillReceiveProps() {
  //   let filters = this.props.navigation.getParam('filters', null)
  //   filters ? this.setFiltersToState(filters) : null
  // }

  componentWillMount() {
    console.log(this.state);
    // Realm.open(realmConfig).then(realm => {
    //   const locations = realm.objects(locationSchema.name);
    //   this.setState({
    //     locations: locations
    //   });
    // });
  }

  iconStyle = () => {
    return {
        iconImage: '{icon}',
        iconAllowOverlap: true,
        iconSize: 1.5,
        iconIgnorePlacement: true
    }
  }

  onMarkerPress = event => {
    const feature = event.nativeEvent.payload;
    this.props.navigation.navigate('Modal', { feature });
  };

  onLinePress = event => {
    const feature = event.nativeEvent.payload;
    this.props.navigation.navigate('Modal', { feature });
  };

  setFiltersToState = (filters) => {
      this.setState({filters: filters})
  };

  zoomOut = () => {
    this._map.getZoom().then((zoom) => {
      this._map.zoomTo(zoom - .25)
    })
  };

  render() {
    let { navigation } = this.props;
    let properties = navigation.state.params;

    let layerStyles = MapboxGL.StyleSheet.create({
      icon: {
        iconImage: '{icon}',
        iconAllowOverlap: true,
        iconSize: 1.5,
        iconIgnorePlacement: true,
        visibility: 'none'
      },
      line: {
        lineWidth: 2
      },
      hidden: {
        visibility: 'visible'
      }
    });

    filters = this.props.navigation.getParam('filters', null)
    for(key in filters) {
      filters[key] === true ? layerStyles.icon.visibility = 'visible' : console.warn(filters[key])
    }
    
    // filters ? layerStyles.icon.visibility = 'visible' : layerStyles.icon.visibility = 'none'
    // console.warn(filters)

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
        // styleURL="mapbox://styles/mrmeg/cjv5d4zgi1wqy1fpfifl58i5y"
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

        {/* <MapboxGL.ShapeSource
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
        </MapboxGL.ShapeSource> */}

        <MapboxGL.ShapeSource
          id="foodAndDrink"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={foodAndDrink}
        >
          <MapboxGL.SymbolLayer
            id="foodAndDrinkSymbols"
            minZoomLevel={1}
            // style={this.state.filters ? console.warn(this.state.filters) : console.warn(this.state.filters) }
            // style={ !filters.foodAndDrink ? layerStyles.hidden : layerStyles.icon }
            // style={[layerStyles.icon, layerStyles.hidden]}
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