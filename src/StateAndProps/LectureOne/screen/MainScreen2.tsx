import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(6, 'Mật khẩu yêu cầu có độ dài trên 6 ký tự')
    .max(16, 'Mật khẩu có độ dài tối đa là 16 ký tự')
    .required('Độ dài yêu cầu'),
});
export default function MainScreen2() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, useNumber] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePasswordString = (passwordLenght: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    if (upperCase) {
      characterList += upperCase;
    }
    if (lowerCase) {
      characterList += lowerCase;
    }
    if (numbers) {
      characterList += numbers;
    }
    if (symbols) {
      characterList += symbols;
    }
    const passwordResult = createPassword(characterList, passwordLenght);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLenght: number) => {
    let result = '';
    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result = characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {};
  return (
    <View>
      <Text>MainScreen2</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
