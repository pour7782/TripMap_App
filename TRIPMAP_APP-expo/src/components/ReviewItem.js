import { StyleSheet, Button, Image, Text, View } from "react-native";

// 일정 공유 카드 부분
const ReviewItem = ({ item, onPressDetail }) => {
    return (
        <View style={styles.reviewItem}>
            <View style={styles.profileContainer}>
                <Image source={item.profileImage} style={styles.profileImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{item.user}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.hashtag}>{item.hashtag}</Text>
                    <Text style={styles.region}>지역: {item.region}</Text>
                </View>
            </View>
            <Button title="상세 보기" onPress={onPressDetail} />
        </View>
    )
}

const styles = StyleSheet.create({
    reviewItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#f9f9f9',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 22,
        marginTop: 10,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    title: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    hashtag: {
        color: 'gray',
    },
    region: {
        color: '#286699',
        marginTop: 4,
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default ReviewItem;