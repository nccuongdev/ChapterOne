import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import React, {useState} from 'react';
import DiceOne from '../../../asset/one.png';
import DiceTwo from '../../../asset/two.png';
import DiceThree from '../../../asset/three.png';
import DiceFour from '../../../asset/four.png';
import DiceFive from '../../../asset/five.png';
import DiceSix from '../../../asset/six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.imageStyle} source={imageUrl} />
    </View>
  );
};

export default function MainScreen4(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const randomOnClick = () => {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    switch (randomDice) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={randomOnClick} style={styles.rollButton}>
        <Text>ROLL</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  rollButton: {
    padding: 20,
    backgroundColor: 'orange',
    marginVertical: 20,
  },
});
