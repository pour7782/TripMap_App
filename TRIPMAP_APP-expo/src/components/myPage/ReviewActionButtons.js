import { StyleSheet, Pressable, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useReviews } from '../../contexts/ReviewContext';

const ReviewActionButtons = ({ reviewId }) => {
    const navigation = useNavigation()
    const { removeReview } = useReviews()

    const handleDelete = () => {
        Alert.alert('삭제 확인', '정말 삭제할까요?', [
            { text: '취소', style: 'cancel' },
            { text: '삭제', onPress: () => removeReview(reviewId), style: 'destructive' },
        ])
    }

    return (
        <View style={styles.buttons}>
            <Pressable
                onPress={() => navigation.navigate('ReviewWriteScreen', { reviewId })}
                style={styles.editButton}
            >
                <Text style={styles.editText}>수정</Text>
            </Pressable>
            <Pressable
                onPress={handleDelete}
                style={styles.deleteButton}
            >
                <Text style={styles.deleteText}>삭제</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    editText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    editButton: {
        backgroundColor: '#1e90ff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginRight: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    deleteText: {
        color: '#ff4d4d',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    deleteButton: {
        borderWidth: 1,
        borderColor: '#ff4d4d',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})

export default ReviewActionButtons;
