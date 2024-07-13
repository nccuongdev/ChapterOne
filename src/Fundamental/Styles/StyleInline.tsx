import React from 'react';
import {View, Text} from 'react-native';

const StyleInline = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}>
      <Text style={{fontSize: 20, color: 'blue'}}>Hello, Inline Styles!</Text>
    </View>
  );
};

export default StyleInline;
