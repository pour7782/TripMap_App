import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const BottomTab = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.tab}>
            <Text style={styles.text}>메인</Text>
            <Text style={styles.text}>추천 일정</Text>
            <Text style={styles.text}>일정 생성</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                <Text style={styles.text}>마이페이지</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 3,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: '#90caf9',
    },
})

export default BottomTab;