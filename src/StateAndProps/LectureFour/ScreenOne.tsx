// ScreenOne.js
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ScreenOne = ({iPhones, dog}) => {
  return (
    <View style={styles.container}>
      <Text>Dog Name: {dog.name}</Text>
      <Text>Dog Age: {dog.age}</Text>
      <Text>Dog Hand: {dog.hand}</Text>
      {iPhones.map((iphone, device) => (
        <View key={device}>
          <Text>iPhone Name: {iphone.name}</Text>
          <Text>iPhone RAM: {iphone.ram}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ScreenOne;
