import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ScreenOne from './src/StateAndProps/LectureFour/ScreenOne';
import MainScreen5 from './src/StateAndProps/LectureFour/MainScreen5';
import AppProps from './src/Fundamental/Props/AppProps';
import ParentComponent from './src/Fundamental/StateAndProps/ParentComponent';
import StyleSheets from './src/Fundamental/Styles/StyleSheet';
import StyleObject from './src/Fundamental/Styles/StyleObject';
import StyleInline from './src/Fundamental/Styles/StyleInline';
import AllInOne from './src/Fundamental/Styles/AllInOne';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AllInOne />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
