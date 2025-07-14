import { StyleSheet, Button, Image, Text, View, Pressable } from "react-native";

// 일정 공유 카드 부분
const ReviewItem = ({ item, onPressDetail }) => {
    return (
        <Pressable style={styles.card} onPress={onPressDetail}>
            <Image source={item.profileImage} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.label}>{item.user}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.hashtag}>{item.hashtag}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
        borderRadius: 30,
        marginRight: 15,
    },
    info: {
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    title: {
        fontSize: 14,
        color: '#333',
        marginBottom: 2,
    },
    hashtag: {
        fontSize: 12,
        color: '#286699',
    },
})

export default ReviewItem;