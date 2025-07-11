import { View, Text, Pressable, StyleSheet } from 'react-native';

// 후기 작성 페이지 카테고리, 일정공유 유무
const CategorySelector = ({ shareSchedule, setShareSchedule }) => {
  return (
    <>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>해당 지역 카테고리</Text>
        <View style={styles.shareToggle}>
          <Text style={styles.shareText}>일정 공유</Text>
          <Pressable
            onPress={() => setShareSchedule((prev) => !prev)}
            style={styles.toggleButton}
          >
            <Text style={{ color: shareSchedule ? '#007AFF' : '#aaa' }}>
              {shareSchedule ? 'ON' : 'OFF'}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.categoryRow}>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>제주도</Text>
        </Pressable>
        <Pressable style={styles.categoryButton}>
          <Text style={styles.categoryText}>서귀포</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  shareToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  shareText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 12,
    marginTop: 10,
  },
  categoryRow: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 12,
  },
  categoryButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
  },
});

export default CategorySelector;