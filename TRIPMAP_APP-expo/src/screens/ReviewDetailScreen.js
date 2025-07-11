import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, TouchableOpacity } from 'react-native';
import PopupSharedSchedule from '../pages/PopupSharedSchedule';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ReviewDetailScreen = ({ route }) => {
  const { review } = route.params || {};
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    setShowPopup(true);
  }, [])

  if (!review || !review.title) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>리뷰 데이터를 불러올 수 없습니다.</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.link}>{'< 돌아가기'}</Text>
        </Pressable>
      </View>
    );
  }

  const additionalData = {
    '사용자1': {
      body: "여기는 제주도에서 가장 추천하는 맛집이에요! 바다를 보며 식사할 수 있어서 너무 좋았어요.",
      pros: "식사하면서 바다를 보며 힐링할 수 있었어요.",
      cons: "조금 비쌌어요.",
      conclusion: "추천합니다! 꼭 가보세요.",
      photos: [require('../../assets/food.png')],
    },
    '사용자2': {
      body: "서귀포에서 자연을 느낄 수 있는 코스였어요. 나무와 함께 걷는 길이 너무 좋았습니다.",
      pros: "자연을 만끽할 수 있어서 좋아요.",
      cons: "일부 구간은 조금 불편했어요.",
      conclusion: "자연을 좋아하신다면 강력히 추천해요.",
      photos: [require('../../assets/seogwipo.jpg')],
    },
    '사용자3': {
      body: "애월의 숨겨진 명소들을 찾을 수 있었어요. 잘 알려지지 않은 장소들이 많아서 좋았어요.",
      pros: "조용하고 한적한 곳에서 여행할 수 있어요.",
      cons: "교통편이 조금 불편할 수 있어요.",
      conclusion: "차가 있다면 더 편하게 즐길 수 있어요.",
      photos: [require('../../assets/aewol.jpg')],
    }
  };

  const userAdditionalData = additionalData[review.user] || {};

  return (
    <ScrollView style={styles.container}>
      {/* 뒤로 가기 버튼 */}
      <Pressable onPress={() => navigation.goBack()} style={styles.backPressable}>
        <Text style={styles.link}>{'< 후기 목록'}</Text>
      </Pressable>

      {/* 제목 */}
      <Text style={styles.title}>{review.title}</Text>

      {/* 프로필 사진과 작성자 정보 컨테이너 */}
      <View style={styles.profileContainer}>
        <Image source={review.profileImage} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>작성자: {review.user}</Text>
          <Text style={styles.hashtag}>{review.hashtag}</Text>
        </View>
      </View>

      {/* 리뷰 본문 */}
      <Text style={styles.subHeading}>리뷰 본문:</Text>
      <Text style={styles.body}>{userAdditionalData.body || '이 부분은 아직 작성되지 않았습니다.'}</Text>

      {/* 장점 */}
      <Text style={styles.subHeading}>장점:</Text>
      <Text style={styles.body}>{userAdditionalData.pros || '이 부분은 아직 작성되지 않았습니다.'}</Text>

      {/* 단점 */}
      <Text style={styles.subHeading}>단점:</Text>
      <Text style={styles.body}>{userAdditionalData.cons || '이 부분은 아직 작성되지 않았습니다.'}</Text>

      {/* 결론 */}
      <Text style={styles.subHeading}>결론:</Text>
      <Text style={styles.body}>{userAdditionalData.conclusion || '이 부분은 아직 작성되지 않았습니다.'}</Text>

      {/* 사진 */}
      <Text style={styles.subHeading}>사진:</Text>
      {userAdditionalData.photos && userAdditionalData.photos.length > 0 ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          {userAdditionalData.photos.map((photo, index) => (
            <Image key={index} source={photo} style={styles.image} />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.body}>사진이 없습니다.</Text>
      )}

      <TouchableOpacity
        style={[styles.openPopupButton, { bottom: insets.bottom + 20 }]}
        onPress={() => setShowPopup(true)}
        hitSlop={{ top: 13, bottom: 13, left: 13, right: 13 }}
      >
        <Text style={styles.buttonText}>팝업 열기</Text>
      </TouchableOpacity>

      <PopupSharedSchedule
        visible={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  openPopupButton: {
        position: 'absolute',
        left: 20,
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
  backPressable: {
    marginTop: 3,    // 상단에 좀 붙게
    marginBottom: 20, // 제목과 간격 넓힘
  },
  link: {
    color: '#007BFF',
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  username: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  hashtag: {
    fontSize: 16,
    color: '#888',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 17,
    color: '#333',
  },
  body: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
  },
  horizontalScroll: {
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
});

export default ReviewDetailScreen;
