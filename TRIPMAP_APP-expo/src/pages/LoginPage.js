import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginPage = () => {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  // 로그인 버튼 클릭 시
  const checkUser = () => {
    if (!loginData.username || !loginData.password) {
      // 아이디 또는 비밀번호가 비어있는 경우
      setErrorMsg("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 시도 (여기서 API 호출을 시뮬레이션)
    const loginSuccess = true; // 실제 로그인 결과 받아와야 함

    if (!loginSuccess) {
      setErrorMsg("로그인 실패");
      return;
    }

    // 로그인 성공 후 MainScreen으로 이동
    setErrorMsg('');
    navigation.navigate('MainScreen');  // 'MainScreen'으로 네비게이션
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="user" size={60} color="#007AFF" solid />
      <Text style={styles.title}>로그인</Text>
      <View style={styles.formGroup}>
        <TextInput
          style={styles.input}
          placeholder="아이디를 입력해주세요."
          value={loginData.username}
          onChangeText={(text) => setLoginData({ ...loginData, username: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력해주세요."
          value={loginData.password}
          onChangeText={(text) => setLoginData({ ...loginData, password: text })}
          secureTextEntry
        />
      </View>

      {errorMsg && <Text style={styles.errorMsg}>{errorMsg}</Text>}

      <View style={styles.buttonGroup}>
        <Pressable
          style={styles.button}
          onPress={checkUser} // 로그인 버튼 클릭 시 로그인 검증
        >
          <Text style={styles.buttonText}>로그인</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.signupButton]}
          onPress={() => navigation.navigate('SignupPage')} // 회원가입 페이지로 이동
        >
          <Text style={styles.buttonText}>회원가입</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f6f8",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#333",
  },
  formGroup: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    width: "100%",
    marginBottom: 15,
  },
  errorMsg: {
    color: "red",
    marginBottom: 10,
  },
  buttonGroup: {
    width: "100%",
    alignItems: "center", // 버튼을 중앙 정렬
  },
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
    width: "100%", // 화면 너비를 채우도록 설정
    backgroundColor: "#6495ED", // 버튼 배경 색상
  },
  signupButton: {
    backgroundColor: '#6495ED', // 회원가입 버튼 색상
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  icon:{
    marginBottom : 30,
    
  },
});
export default LoginPage;
