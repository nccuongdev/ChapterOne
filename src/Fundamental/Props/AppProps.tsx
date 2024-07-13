import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './Getting';

const AppProps = () => {
  return (
    <SafeAreaView>
      <Greeting name="Tài" />
      <Greeting name="Nam" />
      <Greeting name="Thơ" />
    </SafeAreaView>
  );
};

export default AppProps;
