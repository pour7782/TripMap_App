import { StyleSheet, Text, TextInput, View } from "react-native";

const LoginForm = ({ loginData, setLoginData, errorMsg }) => {
    return (
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
            {errorMsg ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
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
        marginBottom: 15,
    },
    errorMsg: {
        color: "red",
    },
})

export default LoginForm;