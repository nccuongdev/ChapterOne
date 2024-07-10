import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Part1 = () => (
  <SafeAreaView style={styles.container}>
    <Text>Hello World</Text>
    <Button title="Click me" />
    <View aria-busy style={{backgroundColor: 'blue', flex: 0.1}}></View>
    <View style={{backgroundColor: 'red', flex: 0.4}}></View>
  </SafeAreaView>
);

export default Part1;

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'column',
    height: 100,
    width: 100,
    flex: 1,
  },
});
