import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ButtonScreen = ({message}: any) => {
  const [mes, setMes] = useState('');

  return (
    <TouchableOpacity
      onPress={() => {
        setMes('jjjj');
        message = mes;
      }}>
      <Text>{message}</Text>
    </TouchableOpacity>
  );
};

export default ButtonScreen;
