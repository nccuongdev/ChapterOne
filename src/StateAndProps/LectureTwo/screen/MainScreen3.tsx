import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

export default function MainScreen3() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const generateBackground = () => {
    let color = '#';
    const hexRange = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    console.log(color);

    setBackgroundColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <SafeAreaView
        style={[styles.contaier, {backgroundColor: backgroundColor}]}>
        <View>
          <TouchableOpacity
            onPress={generateBackground}
            style={styles.buttonStyle}>
            <Text>Random color</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
  },
  contaier: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
