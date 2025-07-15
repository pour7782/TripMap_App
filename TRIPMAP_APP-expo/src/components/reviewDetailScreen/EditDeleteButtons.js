import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';

const EditDeleteButtons = ({ onEdit, onDelete }) => {
    const { review } = route.params || {}
  const { updateReview, removeReview } = useReviews()
  const [isEditing, setIsEditing] = useState(false)

  
    const [title, setTitle] = useState(review.title)
    const [body, setBody] = useState(review.body)
    const [pros, setPros] = useState(review.pros)
    const [cons, setCons] = useState(review.cons)
    const [conclusion, setConclusion] = useState(review.conclusion)
  
  const handleDelete = () => {
    Alert.alert('리뷰 삭제', '정말 삭제하시겠어요?', [
      { text: '취소', style: 'cancel' },
      {
        text: '삭제',
        style: 'destructive',
        onPress: () => {
          removeReview(review.id)
          navigation.goBack()
        },
      },
    ])
  }

  const handleSave = () => {
    updateReview(review.id, { title, body, pros, cons, conclusion })
    setIsEditing(false)
  }

  return (
    <View style={styles.buttons}>
      <Pressable style={styles.editButton} onPress={onEdit}>
        <Text style={styles.editText}>수정</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>삭제</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#4da6ff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 8,
    elevation: 2,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    elevation: 2,
  },
  editText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  deleteText: {
    color: '#ff4d4d',
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default EditDeleteButtons;
