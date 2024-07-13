import {View, Text, Pressable} from 'react-native';
import React from 'react';

const ChildComponent = ({count, countUp}) => {
  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={countUp}>
        <Text>+1</Text>
      </Pressable>
    </View>
  );
};

export default ChildComponent;
