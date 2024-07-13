import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StyleSheets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StyleSheet</Text>
    </View>
  );
};

export default StyleSheets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});
