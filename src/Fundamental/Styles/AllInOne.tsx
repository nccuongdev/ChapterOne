import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const containerStyle = {
  padding: 10,
  borderWidth: 20,
  borderColor: 'red',
};

const AllInOne = () => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>Hello, Combined Styles!</Text>
      <Text style={{fontSize: 18, color: 'green'}}>Inline style.</Text>
    </View>
  );
};

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

export default AllInOne;
