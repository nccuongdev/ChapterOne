import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaView>
      <ChildComponent count={count} countUp={countUp} />
    </SafeAreaView>
  );
};

export default ParentComponent;
