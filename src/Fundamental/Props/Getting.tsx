import React from 'react';
import {Text, View} from 'react-native';

const Greeting = ({name}) => {
  return (
    <View>
      <Text>Chào anh, {name}!</Text>
    </View>
  );
};

export default Greeting;
