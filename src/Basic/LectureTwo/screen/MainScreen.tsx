import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../component/FlatCards';
import ElevatedCards from '../component/ElevatedCards';
import FancyCards from '../component/FancyCards';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
