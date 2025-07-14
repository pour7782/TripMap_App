import { Pressable, Text, StyleSheet } from 'react-native';

const SignupButton = ({ onPress }) => (
    <Pressable style={styles.signupBtn} onPress={onPress}>
        <Text style={styles.signupText}>회원가입</Text>
    </Pressable>
)

const styles = StyleSheet.create({
    signupBtn: {
        backgroundColor: '#1e90ff',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        width: '100%',
    },
    signupText: {
        color: 'white',
        fontSize: 16,
    },
})

export default SignupButton;
