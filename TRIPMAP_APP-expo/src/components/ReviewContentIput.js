import { Text, TextInput, StyleSheet } from 'react-native';

// 리뷰 작성 칸
const ReviewContentInput = ({ content, setContent }) => {
  return (
    <>
      <Text style={styles.label}>리뷰 작성</Text>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={8}
        placeholder="여행 후기를 작성해주세요"
        value={content}
        onChangeText={setContent}
      />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
    textAlignVertical: 'top',
    height: '45%'
  },
})

export default ReviewContentInput;