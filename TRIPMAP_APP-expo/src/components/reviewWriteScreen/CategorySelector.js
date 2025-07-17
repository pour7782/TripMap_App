import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useReviewSettings } from '../../contexts/ReviewSettingsContext'; 


// 후기 작성 페이지 카테고리, 일정공유 유무
const CategorySelector = () => {  
  const { shareSchedule, setShareSchedule } = useReviewSettings();

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>리뷰 작성</Text>

        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>제주도</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>서귀포</Text>
        </Pressable>

        <View style={styles.onEndOff}>
          <Text style={styles.shareText}>일정 공유</Text>
          <Pressable
            onPress={() => setShareSchedule(prev => !prev)}
            style={styles.toggleButton}
          >
            <Text style={{ color: shareSchedule ? '#007AFF' : '#aaa' }}>
              {shareSchedule ? 'ON' : 'OFF'}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  onEndOff: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  categoryButton: {
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 12,
    color: '#999',
  },
  shareText: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
  },
})

export default CategorySelector;