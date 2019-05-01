import React from 'react';
import { View } from 'react-native';

const ModalCardSectionImage = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    height: 300,
    width: '100%',
    padding: 5,
    backgroundColor: '#d7dcd0',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { ModalCardSectionImage };
