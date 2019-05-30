import MapboxGL from '@mapbox/react-native-mapbox-gl';

export default layerStyles = MapboxGL.StyleSheet.create({
  attractions: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  diving: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  foodAndDrink: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  healthAndSafety: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  hiking: {
    lineWidth: 2,
    visibility: 'none',
    lineColor: 'yellow',
    iconImage: '{icon}',
  },
    lodging: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  shopping: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  tours: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },
  transportation: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true,
    visibility: 'none',
  },

  clusteredPoints: {
    circlePitchAlignment: 'map',
    circleColor: MapboxGL.StyleSheet.source(
      [
        [25, 'yellow'],
        [50, 'red'],
        [75, 'blue'],
        [100, 'orange'],
        [300, 'pink'],
        [750, 'white'],
      ],
      'point_count',
      MapboxGL.InterpolationMode.Exponential,
    ),

    circleRadius: MapboxGL.StyleSheet.source(
      [[0, 15], [100, 20], [750, 30]],
      'point_count',
      MapboxGL.InterpolationMode.Exponential,
    ),
    circleOpacity: 0.84,
    circleStrokeWidth: 0,
    circleStrokeColor: 'white',
  },

  clusterCount: {
    textField: '{point_count}',
    textSize: 20,
    textPitchAlignment: 'map',
  },
});

// export default layerStyles;