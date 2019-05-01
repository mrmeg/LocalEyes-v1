import React from 'react';
import { View } from 'react-native';

const ModalCardSectionDescription = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingTop: 8,
    borderBottomWidth: 1,
    width: '100%',
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    backgroundColor: '#d7dcd0',
    opacity: .80,
  }
};

export { ModalCardSectionDescription };
