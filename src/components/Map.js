import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Realm from 'realm';
import hiking from '../database/geoJson/hiking.json';
import foodAndDrink from '../database/geoJson/foodAndDrink.json';
import lodging from '../database/geoJson/lodging.json';
import attractions from '../database/geoJson/attractions.json';
import diving from '../database/geoJson/diving.json';
import shopping from '../database/geoJson/shopping.json';
import tours from '../database/geoJson/tours.json';
import transportation from '../database/geoJson/transportation.json';
import layerStyles from '../styles/LayerStyles';
import { locationSchema } from '../database/models/location';
import { realmConfig } from '../database/realmConfig';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoibXJtZWciLCJhIjoiY2p1OTFrZ3lvMmI2ZDN5b2IyMTJqbGx3aCJ9.JMyS6W3wxERau3-2nuzSsA'
);

export default class Map extends React.Component {

  state = {
    locations: {},
  }

  componentDidUpdate() {
    let zoomOut = this.props.navigation.getParam('zoomOut', null)
    zoomOut ? this.zoomOut() : null
  }

  componentWillMount() {
    console.log(this.state);
    // Realm.open(realmConfig).then(realm => {
    //   const locations = realm.objects(locationSchema.name);
    //   this.setState({
    //     locations: locations
    //   });
    // });
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
      this._map.zoomTo(zoom - .75)
    })
  };

  render() {
    let { navigation } = this.props;
    let properties = navigation.state.params;

    filters = this.props.navigation.getParam('filters', null)
    for(let key in filters) {
      filters[key] === true 
        ? layerStyles[key].visibility = 'visible' 
        : layerStyles[key].visibility = 'none'
     }
    
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

        <MapboxGL.ShapeSource
          id="attractions"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={attractions}
        >
          <MapboxGL.SymbolLayer
            id="attractions"
            minZoomLevel={1}
            style={layerStyles.attractions}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="diving"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={diving}
        >
          <MapboxGL.SymbolLayer
            id="diving"
            minZoomLevel={1}
            style={layerStyles.diving}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="foodAndDrink"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={foodAndDrink}
          // cluster={true}
          // clusterRadius={5}
          // clusterMaxZoom={10}
        >
          <MapboxGL.SymbolLayer
            id="foodAndDrinkSymbols"
            minZoomLevel={1}
            style={layerStyles.foodAndDrink}
          />

          {/* <MapboxGL.SymbolLayer
            id="clusteredPoints"
            belowLayerID="foodAndDrinkSymbols"
            filter={['has', 'point_count']}
            style={layerStyles.clusteredPoints}
          />

            <MapboxGL.SymbolLayer
              id="singlePoint"
              filter={['!has', 'point_count']}
              style={layerStyles.foodAndDrink}
            /> */}

        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="lodging"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={lodging}
        >
          <MapboxGL.SymbolLayer
            id="lodging"
            minZoomLevel={1}
            style={layerStyles.lodging}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="hiking"
          minZoomLevel={1}
          shape={hiking}
          onPress={this.onLinePress}
        >
          <MapboxGL.LineLayer
            id="hikingLines"
            style={layerStyles.hiking}
          />

          <MapboxGL.SymbolLayer
            id=""
            style={layerStyles.hiking} 
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="shopping"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={shopping}
        >
          <MapboxGL.SymbolLayer
            id="shopping"
            minZoomLevel={1}
            style={layerStyles.shopping}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="tours"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={tours}
        >
          <MapboxGL.SymbolLayer
            id="tours"
            minZoomLevel={1}
            style={layerStyles.tours}
          />
        </MapboxGL.ShapeSource>

        <MapboxGL.ShapeSource
          id="transportation"
          hitbox={{ width: 20, height: 20 }}
          onPress={this.onMarkerPress}
          shape={transportation}
        >
          <MapboxGL.SymbolLayer
            id="transportation"
            minZoomLevel={1}
            style={layerStyles.transportation}
          />
        </MapboxGL.ShapeSource>
        
      </MapboxGL.MapView>
    );
  }
}