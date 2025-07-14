import { Pressable, StyleSheet, Text, View } from "react-native";

const LoginButtons = ({ onLogin, onSignup }) => {
    return (
        <View style={styles.buttonGroup}>
            <Pressable style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.signupButton]} onPress={onSignup}>
                <Text style={styles.buttonText}>회원가입</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        marginBottom: 10,
        width: "100%",
        backgroundColor: "#1e90ff",
    },
    signupButton: {
        backgroundColor: "#1e90ff",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
})

export default LoginButtons;