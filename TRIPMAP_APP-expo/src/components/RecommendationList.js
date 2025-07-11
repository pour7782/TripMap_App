import { StyleSheet, Text, View } from "react-native";

// 팝업 PopupDetail 사진 옆 추천 리스트
const RecommendationList = ({ region }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{region} 추천 장소 리스트</Text>
            {/* 실제 장소 추천 리스트는 추후 데이터 연동 */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    title: {
        fontSize: 15,
        margin: 5,
        padding: 5,
    },
})

export default RecommendationList;