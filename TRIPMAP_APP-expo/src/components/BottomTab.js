import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 일단 위치만 잡아둔겁니다.
const BottomTab = () => {
    return (
        <SafeAreaView style={styles.tab}>
            <Text style={styles.text}>메인</Text>
            <Text style={styles.text}>추천 일정</Text>
            <Text style={styles.text}>일정 생성</Text>
            <Text style={styles.text}>마이페이지</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: '#90caf9',
    },
})

export default BottomTab;