import React, { Component } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import {
  Card,
  ModalCardSectionImage,
  ModalCardSectionDescription,
  ModalCardSectionFeatureData
} from './common';
import images from '../media/images';

class ModalFeature extends Component {
  render() {
    const { navigation } = this.props;
    const properties = navigation.state.params.feature.properties;
    const { textStyle, imageStyle, descriptionStyle } = styles;

    return (
      <ScrollView>
        <Card>
          <ModalCardSectionImage>
            <Image source={ images[properties.photo] } style={imageStyle} />
          </ModalCardSectionImage>
          <ModalCardSectionDescription>
            <Text style={textStyle}>{properties.description}</Text>
          </ModalCardSectionDescription>
          <ModalCardSectionFeatureData style={descriptionStyle}>
            <Text style={textStyle}>
              address: {properties.address}
              {'\n'}
              {'\n'}
              website: {properties.website}
              {'\n'}
              {'\n'}phone number: {properties.phone}
              {'\n'}
            </Text>
          </ModalCardSectionFeatureData>
          <ModalCardSectionFeatureData>
            <Text style={textStyle}>
              And: I'm thinking that this box (aka CardSection) will be for
              additional user/community-defined data.{'\n'}
              {'\n'}Things like images{'\n'}
              {'\n'}or comments{'\n'}
              {'\n'}or video, etc, etc
            </Text>
          </ModalCardSectionFeatureData>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 17
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  descriptionStyle: {
    padding: 10
  }
};

export default ModalFeature;
