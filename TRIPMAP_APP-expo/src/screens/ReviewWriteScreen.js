import { useState, useEffect } from 'react';
import { Text, ScrollView, Pressable, Alert, StyleSheet } from 'react-native';
import HeaderBackButton from '../components/reviewWriteScreen/HeaderBackButton';
import TitleInput from '../components/reviewWriteScreen/TitleInput';
import CategorySelector from '../components/reviewWriteScreen/CategorySelector';
import ReviewContentInput from '../components/reviewWriteScreen/ReviewContentIput';
import AttachModal from '../components/reviewWriteScreen/AttachModal';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useReviews } from '../contexts/ReviewContext';

// 후기 작성 페이지
const ReviewWriteScreen = () => {
  const [title, setTitle] = useState(review?.title || '')
  const [content, setContent] = useState(review?.body || '')
  const [shareSchedule, setShareSchedule] = useState(true)
  const [attachVisible, setAttachVisible] = useState(false)
  const { addReview, updateReview } = useReviews()
  const navigation = useNavigation()
  const route = useRoute()
  const review = route.params?.review

  useEffect(() => {
    if (review) {
      setTitle(review.title || '')
      setContent(review.body || '')
    }
  }, [review])

  const onSubmit = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('알림', '제목과 내용을 입력해주세요.')
      return
    }

    if (review) {
      const updatedReview = {
        ...review,
        title,
        body: content,
      }
      updateReview(updatedReview)
      Alert.alert('수정 완료', '', [
        { text: '확인', onPress: () => navigation.goBack() },
      ])
    } else {
      const newReview = {
        id: Date.now().toString(),
        user: '나',
        title,
        body: content,
        hashtag: '#공유',
        region: '애월',
        profileImage: require('../../assets/images.png'),
      }
      addReview(newReview);
      Alert.alert('작성 완료', '', [
        { text: '확인', onPress: () => navigation.goBack() },
      ])
    }
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderBackButton onBack={() => navigation.goBack()} />

        <TitleInput title={title} setTitle={setTitle} />
        <CategorySelector shareSchedule={shareSchedule} setShareSchedule={setShareSchedule} />

        <ReviewContentInput content={content} setContent={setContent} />

        <Text style={styles.label}>사진/영상 첨부</Text>
        <Pressable
          style={styles.attachButton}
          onPress={() => setAttachVisible(true)}
        >
          <Text style={styles.attachText}>파일 선택</Text>
        </Pressable>

        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>작성 완료</Text>
        </Pressable>
      </ScrollView>

      <AttachModal visible={attachVisible} onClose={() => setAttachVisible(false)} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  attachButton: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  attachText: {
    color: '#555',
    fontSize: 14,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default ReviewWriteScreen;