import { useState } from 'react';
import { ScrollView, Text, Button, StyleSheet, Alert } from 'react-native';
import { useReviews } from '../contexts/ReviewContext';
import { useNavigation } from '@react-navigation/native';
import PhotoList from '../components/reviewEditScreen/PhotoList';
import ReviewForm from '../components/reviewEditScreen/ReviewForm';

// react-native-image-picker 설치 필요: npm install react-native-image-picker
import { launchImageLibrary } from 'react-native-image-picker';

const ReviewEditScreen = ({ route }) => {
  const { review } = route.params
  const { updateReview } = useReviews()
  const navigation = useNavigation()

  const [title, setTitle] = useState(review.title)
  const [hashtag, setHashtag] = useState(review.hashtag)
  const [body, setBody] = useState(review.body || '')
  const [pros, setPros] = useState(review.pros || '')
  const [cons, setCons] = useState(review.cons || '')
  const [conclusion, setConclusion] = useState(review.conclusion || '')
  const [photos, setPhotos] = useState(review.photos || [])

  // 사진 삭제 핸들러 (길게 눌렀을 때 실행)
  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    setPhotos(newPhotos)
    updateReview(review.id, { photos: newPhotos })
  }

  // 사진 추가 핸들러
  const addPhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      (response) => {
        if (response.didCancel) return
        if (response.errorCode) {
          Alert.alert('사진 선택 오류', response.errorMessage || '알 수 없는 오류')
          return
        }
        if (response.assets && response.assets.length > 0) {
          const newPhoto = { uri: response.assets[0].uri }
          const newPhotos = [...photos, newPhoto]
          setPhotos(newPhotos)
          updateReview(review.id, { photos: newPhotos })
        }
      }
    )
  }

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('제목을 입력해주세요.')
      return
    }
    updateReview(review.id, { title, hashtag, body, pros, cons, conclusion, photos })
    navigation.goBack()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ReviewForm
        title={title} setTitle={setTitle}
        hashtag={hashtag} setHashtag={setHashtag}
        body={body} setBody={setBody}
        pros={pros} setPros={setPros}
        cons={cons} setCons={setCons}
        conclusion={conclusion} setConclusion={setConclusion}
      />

      <Text style={[styles.label, { marginTop: 30 }]}>사진</Text>
      <PhotoList photos={photos} onRemovePhoto={removePhoto} />
      <Button title="사진 추가" onPress={addPhoto} />

      <Button title="저장하기" onPress={handleSave} style={{ marginTop: 20 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
})

export default ReviewEditScreen;
