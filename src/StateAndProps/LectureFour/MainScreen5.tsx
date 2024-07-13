// MainScreen5.js
import {View} from 'react-native';
import React, {useState} from 'react';
import ScreenOne from './ScreenOne';
import ButtonScreen from './ButtonScreen';

const MainScreen5 = () => {
  const [message, setMessage] = useState('Truyền từ màn hình main5');
  const iphone = [
    {name: 'iphone 10', ram: '3GB'},
    {name: 'iphone 11', ram: '4GB'},
    {name: 'iphone 12', ram: '6GB'},
    {name: 'iphone 13', ram: '8GB'},
  ];

  return (
    <View>
      <ScreenOne
        iPhones={iphone}
        dog={{age: '10', name: 'dokgi :))', hand: '0'}}
      />
      <ButtonScreen message={message} />
    </View>
  );
};

export default MainScreen5;
