import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/reviewDetailScreen/BackButton';
import ProfileSection from '../components/reviewDetailScreen/ProfileSection';
import ReviewSection from '../components/reviewDetailScreen/ReviewSection';
import PhotoGallery from '../components/reviewDetailScreen/PhotoGallery';
import PopupSharedSchedule from '../pages/PopupSharedSchedule';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

// asdfsafsafsfasd

// 임시 데이터
const additionalData = {
  사용자1: {
    body: `여기는 제주도에서 가장 추천하는 맛집이에요! 바다를 보며 식사할 수 있어서 너무 좋았어요. 특히 해가 지는 저녁 시간에 방문하면, 노을이 지는 풍경을 바라보며 식사를 즐길 수 있어 정말 낭만적입니다. 메뉴도 다양해서 해산물 요리를 좋아하는 분들이라면 분명히 만족하실 거예요. 저는 개인적으로 전복버터구이와 해산물파스타가 가장 인상 깊었는데, 재료가 신선하고 양도 푸짐해서 먹는 내내 감탄했어요.

가게 내부 인테리어도 깔끔하고 세련되었고, 테이블 간 간격이 넓어서 편안한 분위기에서 식사할 수 있었어요. 직원분들도 친절하셔서 메뉴 추천도 잘 해주셨고, 음식이 나오는 속도도 적당했어요. 바다를 바로 앞에서 볼 수 있는 야외 테라스 자리는 특히 인기가 많으니 미리 예약하거나 오픈 시간에 맞춰 방문하는 걸 추천드려요.

식사를 마친 후에는 바로 근처 해변을 산책할 수 있어서 하루 일정의 마무리로도 완벽했어요. 가족 단위 여행객이나 커플, 친구들끼리 모두 만족할 수 있는 장소였습니다. 제주도의 아름다운 자연과 맛있는 음식, 편안한 분위기를 모두 한 자리에서 누릴 수 있는 곳이라 다음에 또 제주에 오면 반드시 재방문할 생각입니다.`, 

    pros: "식사하면서 바다를 보며 힐링할 수 있었어요.",
    cons: "조금 비쌌어요.",
    conclusion: "추천합니다! 꼭 가보세요.",
    photos: [require('../../assets/food.png')],
  },
  사용자2: {
    body: "서귀포에서 자연을 느낄 수 있는 코스였어요. 나무와 함께 걷는 길이 너무 좋았습니다.",
    pros: "자연을 만끽할 수 있어서 좋아요.",
    cons: "일부 구간은 조금 불편했어요.",
    conclusion: "자연을 좋아하신다면 강력히 추천해요.",
    photos: [require('../../assets/seogwipo.jpg')],
  },
  사용자3: {
    body: "애월의 숨겨진 명소들을 찾을 수 있었어요. 잘 알려지지 않은 장소들이 많아서 좋았어요.",
    pros: "조용하고 한적한 곳에서 여행할 수 있어요.",
    cons: "교통편이 조금 불편할 수 있어요.",
    conclusion: "차가 있다면 더 편하게 즐길 수 있어요.",
    photos: [require('../../assets/aewol.jpg')],
  }
}

const ReviewDetailScreen = ({ route }) => {
  const { review } = route.params || {}
  const userAdditionalData = additionalData[review.user] || {}
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()
  const [modalVisible, setModalVisible] = useState(false)

  // useEffect(() => {
  //   setModalVisible(true)
  // }, [])

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

        <ReviewSection content={userAdditionalData.body} />

        <PhotoGallery photos={userAdditionalData.photos} />

        <Pressable style={styles.popupButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.popupButtonText}>공유 일정 보기</Text>
        </Pressable>

        <PopupSharedSchedule
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
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
    color: '#333',
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
