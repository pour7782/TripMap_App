import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import SignupForm from '../components/signupPage/SignupForm';
import SignupButton from '../components/signupPage/SignupButton';
import { validateEmail, validatePassword } from '../components/signupPage/Validators';
import { Alert, StyleSheet, Text, View } from 'react-native';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert('이메일 오류', '유효한 이메일 주소를 입력해주세요.', [{ text: '확인' }]);
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('비밀번호 오류', '비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자를 포함해야 합니다.', [{ text: '확인' }]);
      return;
    }

    Alert.alert('회원가입 완료', '회원가입이 완료되었습니다.', [
      {
        text: '확인',
        onPress: () => {
          setTimeout(() => {
            navigation.navigate('LoginPage');
          }, 500);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <SignupForm
        username={username}
        setUsername={setUsername}
        userid={userid}
        setUserId={setUserId}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
      />
      <SignupButton onPress={handleSignup} />
    </View>
  )
}

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
    color: '#000',
  },
})