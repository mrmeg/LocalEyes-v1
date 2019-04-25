import React from 'react';
import { View } from 'react-native';

const ModalCardSectionFeatureData = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    paddingTop: 8,
    borderBottomWidth: 1,
    width: '100%',
    padding: 5,
    backgroundColor: '#fdfdfd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { ModalCardSectionFeatureData };
