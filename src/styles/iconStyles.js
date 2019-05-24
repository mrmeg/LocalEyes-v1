import MapboxGL from '@mapbox/react-native-mapbox-gl';


const iconStyles = MapboxGL.StyleSheet.create({
  foodAndDrink: {
    iconImage: '{icon}',
    iconAllowOverlap: true,
    iconSize: 1.5,
    iconIgnorePlacement: true
  }
})

export default iconStyles;