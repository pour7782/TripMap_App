import { StyleSheet, View, Text, Image } from "react-native";

const MyReviewList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} />
                <View style={styles.info}>
                    <Text style={styles.label}>제주도 여행지 리뷰</Text>
                    <Text style={styles.subtext}>정말 좋았어요! 추천합니다.</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d3d3d3', 
        borderRadius: 17,
        padding: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30, // 동그라미
        marginRight: 15,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#90caf9',
    },
    info: {
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    subtext: {
        fontSize: 13,
    },
})

export default MyReviewList;