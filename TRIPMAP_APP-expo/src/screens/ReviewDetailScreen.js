import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import BackButton from '../components/reviewDetailScreen/BackButton';
import ProfileSection from '../components/reviewDetailScreen/ProfileSection';
import ReviewSection from '../components/reviewDetailScreen/ReviewSection';
import PhotoGallery from '../components/reviewDetailScreen/PhotoGallery';
import PopupSharedSchedule from '../pages/PopupSharedSchedule';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import EditDeleteButtons from '../components/reviewDetailScreen/EditDeleteButtons';
import { useReviews } from '../contexts/ReviewContext';

const ReviewDetailScreen = ({ route }) => {
  const { review: initialReview, showPopup = true } = route.params || {}
  const { reviews } = useReviews()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const [review, setReview] = useState(initialReview)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalPhotos, setModalPhotos] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      const updated = reviews.find(r => r.id === initialReview.id)
      if (updated) setReview(updated)
    }, [reviews])
  )

  // 팝업 자동 띄우기
  useEffect(() => {
    if (showPopup) {
      setModalPhotos(review.photos || [])
      setModalVisible(true)
    }
  }, [showPopup])

  // 팝업 내부 이미지 열기
  const openModalWithPhotos = () => {
    setModalPhotos(review.photos || [])
    setModalVisible(true)
  }

  if (!review || !review.title) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>리뷰 데이터를 불러올 수 없습니다.</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>{'< 돌아가기'}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView
          style={[styles.container, { paddingTop: 0 }]}
          contentContainerStyle={{ paddingBottom: insets.bottom }}
        >
        <BackButton onBack={() => navigation.goBack()} />

        <Text style={styles.title}>{review.title}</Text>

        <ProfileSection
          profileImage={review.profileImage}
          user={review.user}
          hashtag={review.hashtag}
        />

        <EditDeleteButtons review={review}/>

        <ReviewSection content={review.body} />

        <PhotoGallery photos={review.photos} />

        <Pressable style={styles.popupButton} onPress={openModalWithPhotos}>
          <Text style={styles.popupButtonText}>공유 일정 보기</Text>
        </Pressable>

        <PopupSharedSchedule
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          photos={modalPhotos}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
  },
  popupButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#286699',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  popupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default ReviewDetailScreen;
