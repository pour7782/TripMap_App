import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';  // 네비게이션 사용

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [userid, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();  // useNavigation 훅 사용

  // 이메일 유효성 검사 함수
  const validateEmail = (email) => {
    return email.includes('@'); // 이메일에 @ 포함 여부 확인
  };

  // 비밀번호 유효성 검사 함수 (대소문자, 숫자 포함, 8자리 이상)
  const validatePassword = (password) => {
    // 대소문자 포함, 숫자 포함, 8자 이상인지 확인하는 정규식
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      // 이메일에 @가 포함되지 않으면 경고 메시지 표시
      Alert.alert('이메일 오류', '유효한 이메일 주소를 입력해주세요.', [
        { text: '확인' },
      ]);
      return;
    }

    if (!validatePassword(password)) {
      // 비밀번호가 유효하지 않으면 경고 메시지 표시
      Alert.alert('비밀번호 오류', '비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자를 포함해야 합니다.', [
        { text: '확인' },
      ]);
      return;
    }

    // 회원가입 완료 메시지
    Alert.alert('회원가입 완료', '회원가입이 완료되었습니다.', [
      { 
        text: '확인', 
        onPress: () => {
          console.log('회원가입 완료, 로그인 화면으로 이동합니다.');

          // Alert 창이 닫힌 후, 일정 시간 뒤 로그인 페이지로 이동
          setTimeout(() => {
            navigation.navigate('LoginPage');  // 로그인 페이지로 이동
          }, 500);  // 500ms 정도 대기 후 이동
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력하세요"
          value={userid}
          onChangeText={setUserId}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>아이디</Text>
        <TextInput
          style={styles.input}
          placeholder="아이디를 입력하세요"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.input}
          placeholder="이메일을 입력하세요"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Pressable style={styles.signupBtn} onPress={handleSignup}>
        <Text style={styles.signupText}>회원가입</Text>
      </Pressable>    
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,  // 화면의 양옆 여백 추가
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 30,
    color: '#333',
  },
  formGroup: {
    marginBottom: 20,
    width: '100%',  // 입력창이 화면 크기에 맞게 넓어지도록
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    width: '100%',  // 입력창이 전체 너비에 맞도록
  },
  buttonGroup: {
    marginTop: 20,  // 버튼들 간의 간격 추가
    width: '100%',
  },
  loginBtn: {
    backgroundColor: '#6495ED',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',  // 버튼이 전체 너비를 차지하도록
  },
  signupBtn: {
    backgroundColor: '#6495ED',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    width: '100%',  // 버튼이 전체 너비를 차지하도록
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
  signupText: {
    color: 'white',
    fontSize: 16,
  },
});
