// import libraries

import React from 'react';
import { Text, View } from 'react-native';

// create the component

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// style the component

const styles = {
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// make the component available to the rest of the application

export { Header };
