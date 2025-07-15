import { TextInput, StyleSheet, ScrollView } from 'react-native';

// 리뷰 작성 칸
const ReviewContentInput = ({ content, setContent }) => {
  return (
    <ScrollView>
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={8}
        placeholder="여행 후기를 작성해주세요."
        value={content}
        onChangeText={setContent}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
    padding: 14,
    marginTop: 10,
    textAlignVertical: 'top',
    height: 300,
  },
})

export default ReviewContentInput;