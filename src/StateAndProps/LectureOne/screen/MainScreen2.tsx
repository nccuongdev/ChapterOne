import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLenght: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLenght);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLenght: number) => {
    let result = '';
    for (let i = 0; i < passwordLenght; i++) {
      const characterIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Tạo mật khẩu</Text>
          <Formik
            initialValues={{passwordLenght: ''}} //nhận các giá trị truyền vào
            validationSchema={passwordSchema}
            onSubmit={values => {
              generatePasswordString(+values.passwordLenght);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={{flexDirection: 'column'}}>
                  <View style={styles.inputColumn}>
                    <Text>Độ dài mật khẩu</Text>
                    {touched.passwordLenght && errors.passwordLenght && (
                      <Text>{errors.passwordLenght}</Text>
                    )}
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLenght}
                      onChangeText={handleChange('passwordLenght')}
                      placeholder="Nhập độ dài mật khẩu"
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text>Có chữ thường</Text>
                    <BouncyCheckbox
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="green"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text>Có chữ hoa</Text>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="orange"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text>Có chữ số</Text>
                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="red"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text>Có ký tự đặc biệt</Text>
                    <BouncyCheckbox
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="blue"
                    />
                  </View>
                </View>
                <View style={styles.formAction}>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <Text style={styles.textButton}>Tạo mật khẩu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.textButton}>Làm mới</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={[styles.resultPassword, styles.cardResult]}>
          {isPasswordGenerated ? (
            <View>
              <Text style={styles.resultText}>{password}</Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  formAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  inputColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  resultPassword: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardResult: {
    height: 100,
    backgroundColor: 'blue',
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: 'white',
  },
  textButton: {
    color: '#FFF',
  },
});
