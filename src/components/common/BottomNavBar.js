import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomNavBarSection } from '.';

const BottomNavBar = () => {
  state = {
    bottomBar: 'testing'
  };
  const { Visible, textStyle, Invisible } = styles;

  if (this.state.bottomBar === 'testing') {
    // if (this.state.bottomBar !== 'invisible') {
    // console.log('from BottomBar');
    // console.log(this.state.bottomBar);
    return (
      <View style={Visible}>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Home</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Map</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Filters</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
      </View>
    );
  } else if (this.state.bottomBar === 'invisible') {
    // console.log('from BottomBar');
    // console.log(this.state.bottomBar);
    return (
      <View style={Invisible}>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Home</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Map / List</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
        <BottomNavBarSection>
          <TouchableOpacity>
            <Text style={textStyle}>Filters</Text>
          </TouchableOpacity>
        </BottomNavBarSection>
      </View>
    );
  }
};

const styles = {
  Visible: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    elevation: 0,
    position: 'relative'
  },
  Invisible: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    elevation: 0,
    position: 'relative',
    display: 'none'
  },
  textStyle: {
    fontSize: 18
  }
};

export { BottomNavBar };
