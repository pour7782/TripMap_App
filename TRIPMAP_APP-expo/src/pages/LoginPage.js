import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import LoginButtons from "../components/loginPage/LoginButtons";
import LoginForm from "../components/loginPage/LoginForm";

// asdfsafsafsfasd

const LoginPage = () => {
  const navigation = useNavigation();
  const [loginData, setLoginData] = useState({ username: '', password: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const checkUser = () => {
    if (!loginData.username || !loginData.password) {
      setErrorMsg("아이디와 비밀번호를 입력해주세요.")
      return
    }

    const loginSuccess = true;

    if (!loginSuccess) {
      setErrorMsg("로그인 실패")
      return
    }

    setErrorMsg('');
    navigation.navigate('MainScreen')
  }

  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="user" size={60} color="#1e90ff" solid />
      <Text style={styles.title}>로그인</Text>
      <LoginForm
        loginData={loginData}
        setLoginData={setLoginData}
        errorMsg={errorMsg}
      />
      <LoginButtons
        onLogin={checkUser}
        onSignup={() => navigation.navigate('SignupPage')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    color: "#000",
  },
  icon: {
    marginBottom: 30,
  },
})

export default LoginPage;
