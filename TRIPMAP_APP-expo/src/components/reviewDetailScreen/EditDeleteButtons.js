import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useReviews } from "../../contexts/ReviewContext"

const EditDeleteButtons = ({ review }) => {
  const { removeReview } = useReviews()
  const navigation = useNavigation()

  const handleDelete = () => {
    Alert.alert('리뷰 삭제', '정말 삭제하시겠어요?', [
      { text: '취소', style: 'cancel' },
      {
        text: '삭제',
        style: 'destructive',
        onPress: () => {
          removeReview(review.id);
          navigation.goBack();
        },
      },
    ])
  }

  const handleEdit = () => {
    navigation.navigate('ReviewWriteScreen', { review })
  }

  return (
    <View style={styles.buttons}>
      <Pressable onPress={handleEdit} style={styles.editButton}>
        <Text style={styles.editText}>수정</Text>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteText}>삭제</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 8,
    elevation: 2,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#ff4d4d',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  editText: {
    color: 'white',
    fontSize: 14,
  },
  deleteText: {
    color: '#ff4d4d',
    fontSize: 14,
  },
})

export default EditDeleteButtons;