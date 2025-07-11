import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import ReviewSearchBar from '../components/ReviewSearchBar';
import { useNavigation } from '@react-navigation/native';
import ReviewItem from '../components/ReviewItem';

// 임시 데이터
const dummyData = [
  { 
    id: '1', 
    user: '사용자1', 
    title: '제주 여행 추천', 
    hashtag: '#휴식 #맛집', 
    region: '제주',  // 지역 정보 추가
    profileImage: require('../../assets/images.png'),
  },
  { 
    id: '2', 
    user: '사용자2', 
    title: '서귀포 코스', 
    hashtag: '#자연 #힐링',
    region: '서귀포',  // 지역 정보 추가
    profileImage: require('../../assets/images.png'),
  },
  { 
    id: '3', 
    user: '사용자3', 
    title: '애월 둘레길 코스', 
    hashtag: '#풍경 #자연탐방',
    region: '애월',  // 지역 정보 추가
    profileImage: require('../../assets/images.png'),
  },
  {
    id: '4', 
    user: '사용자3', 
    title: '애월 둘레길 코스', 
    hashtag: '#풍경 #자연탐방',
    region: '애월',  // 지역 정보 추가
    profileImage: require('../../assets/images.png'),
  },
];

// 후기 메인 화면
const ScheduleReviewListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData)
  const navigation = useNavigation()

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredData(dummyData);
    } else {
      const filtered = dummyData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hashtag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.region.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} />

      {/* 필터링된 데이터로 FlatList 렌더링 */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReviewItem
            item={item}
            onPressDetail={() => navigation.navigate('ReviewDetailScreen', { review: item })}
          />
        )}
      />

      <ReviewSearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSearch={handleSearch}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
})

export default ScheduleReviewListScreen;