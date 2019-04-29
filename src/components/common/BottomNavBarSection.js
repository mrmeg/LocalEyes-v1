import React from 'react';
import { View } from 'react-native';

const BottomNavBarSection = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: '100%',
    width: '33.333%',
    padding: 5,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { BottomNavBarSection };
