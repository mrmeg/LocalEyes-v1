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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#d7dcd0',
    opacity: .80,
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { ModalCardSectionFeatureData };
