import { View, Text, TextInput, StyleSheet } from 'react-native';

const SignupForm = ({ username, setUsername, userid, setUserId, password, setPassword, email, setEmail }) => {
    return (
        <>
        <FormField label="이름" value={userid} onChangeText={setUserId} placeholder="이름을 입력하세요" />
        <FormField label="아이디" value={username} onChangeText={setUsername} placeholder="아이디를 입력하세요" />
        <FormField label="비밀번호" value={password} onChangeText={setPassword} placeholder="비밀번호를 입력하세요" secure />
        <FormField label="이메일" value={email} onChangeText={setEmail} placeholder="이메일을 입력하세요" />
        </>
    )
}

const FormField = ({ label, value, onChangeText, placeholder, secure = false }) => (
    <View style={styles.formGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        />
    </View>
)

const styles = StyleSheet.create({
    formGroup: {
        marginBottom: 20,
        width: '100%',
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
        width: '100%',
    },
})

export default SignupForm;
