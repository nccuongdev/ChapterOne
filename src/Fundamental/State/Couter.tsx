import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Couter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Nhấn để +1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Couter;
