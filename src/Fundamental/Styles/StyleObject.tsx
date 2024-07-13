import React from 'react';
import {View, Text} from 'react-native';

const containerStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
};

const textStyle = {
  fontSize: 20,
  color: 'blue',
};

const StyleObject = () => {
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>Hello, Style Objects!</Text>
    </View>
  );
};

export default StyleObject;
