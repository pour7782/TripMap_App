import { useState, useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/scheduleReviewListScreen/Header';
import ReviewSearchBar from '../components/scheduleReviewListScreen/ReviewSearchBar';
import { useNavigation } from '@react-navigation/native';
import ReviewItem from '../components/scheduleReviewListScreen/ReviewItem';
import { useReviews } from '../contexts/ReviewContext';
import MyReviewList from '../components/myPage/MyReviewList';

// 후기 메인 화면
const ScheduleReviewListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const navigation = useNavigation()
  const { reviews } = useReviews()

  useEffect(() => {
    if (searchQuery.trim() === '') {
      const noMyReviews = reviews.filter(item => item.user !== '나')
      setFilteredData(noMyReviews)
    } else {
      const query = searchQuery.toLowerCase()
      const searched = reviews.filter(item =>
        (item.title?.toLowerCase() || '').includes(query) ||
        (item.hashtag?.toLowerCase() || '').includes(query) ||
        (item.region?.toLowerCase() || '').includes(query)
      );
      setFilteredData(searched)
    }
  }, [searchQuery, reviews])

  const handleSearch = () => {
    // 버튼 눌렀을 때 처리할 작업 있으면 여기에 작업해주세요.
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <Header onBack={() => navigation.goBack()} />

        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReviewItem
              item={item}
              onPressDetail={() => navigation.navigate('ReviewDetailScreen', { review: item })}
            />
          )}
          keyboardShouldPersistTaps="handled"
          style={styles.flatList}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <View style={styles.searchBarContainer}>
          <ReviewSearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSearch={handleSearch}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 15,
  },
  flatList: {
    flex: 1,
    paddingHorizontal: 7,
  },
  searchBarContainer: {
    marginTop: 10,
  }
})

export default ScheduleReviewListScreen;