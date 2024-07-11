import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {JSXElementConstructor} from 'react';

function Part1(): JSX.Element {
  const isDartMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          isDartMode ? styles.whiteText : styles.darkText,
          styles.layoutboundaries,
        ]}>
        Hello
      </Text>
    </SafeAreaView>
  );
}

export default Part1;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  whiteText: {
    color: '#FFF',
  },
  darkText: {
    color: 'black',
  },

  layoutboundaries: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
