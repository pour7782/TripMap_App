import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// 메인 화면 하단
const BottomTab = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.tab}>
            <Text style={styles.text}>메인</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScheduleReviewListScreen')}>
                <Text style={styles.text}>공유 여행지</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ScheduleFlow')}>
                <Text style={styles.text}>일정 생성</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
                <Text style={styles.text}>마이페이지</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 3,
        backgroundColor: '#fff',
        margin: 12,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: '#90caf9',
    },
})

export default BottomTab;