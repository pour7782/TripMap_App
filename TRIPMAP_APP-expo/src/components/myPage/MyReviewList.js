import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useReviews } from "../../contexts/ReviewContext";
import { useNavigation } from "@react-navigation/native";
import ReviewActionButtons from "./ReviewActionButtons";

// 마이페이지 내가 쓴 리뷰
const MyReviewList = () => {
    const { reviews } = useReviews()
    const navigation = useNavigation()
    const myReviews = reviews.filter((r) => r.user === '나')

    if (myReviews.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text>작성한 리뷰가 없습니다.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {myReviews.map((item) => (
                <Pressable
                    key={item.id}
                    style={styles.card}
                    onPress={() =>
                        navigation.navigate("ReviewDetailScreen", {
                            review: item, showPopup: false,
                        })
                    }
                >
                    <Image source={item.profileImage} style={styles.image} />
                    <View style={styles.info}>
                        <Text style={styles.label}>{item.user}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    
                    <View style={styles.buttons}>
                        <ReviewActionButtons reviewId={item.id} />
                    </View>
                </Pressable>
            ))}
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
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
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
    title: {
        fontSize: 14,
        color: '#333',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
})

export default MyReviewList;