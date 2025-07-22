import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

const MyProfile = () => {
    const { logout } = useAuth()
    const navigation = useNavigation()

    const handleLogout = () => {
        Alert.alert(
            '로그아웃',
            '정말 로그아웃 하시겠습니까?',
            [
                { text: '취소', style: 'cancel' },
                {
                    text: '확인',
                    onPress: () => {
                        logout();
                        navigation.replace('MainScreen')
                    }
                }
            ]
        )
    }
    
    return (
        <View style={styles.profileSection}>
            <View style={styles.profileWrapper}>
                <Image style={styles.profileImage} />
                <TouchableOpacity style={styles.editIcon} hitSlop={{ top: 3, bottom: 3, left: 3, right: 3 }}>
                    <Ionicons name="create-outline" size={18} />
                </TouchableOpacity>
            </View>
            <Text style={styles.username}>사용자 이름</Text>

            <View style={styles.loginButtonWrapper}>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.buttonText}>로그아웃</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileWrapper: {
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#000',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 4,
        borderWidth: 1,
        borderColor: '#fff',
    },
    username: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginButtonWrapper: {
        width: '100%',
        paddingHorizontal: 25,
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        color: '#286699',
        fontSize: 14,
    },
})

export default MyProfile;
