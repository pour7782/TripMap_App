import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

// 후기 작성 페이지 상단 타이틀
const TitleInput = ({ title, setTitle }) => {
  return (
    <>
      <Text style={styles.label}>제목</Text>
      <TextInput
        style={styles.input}
        placeholder="제목을 작성해주세요."
        value={title}
        onChangeText={setTitle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 14,
    marginBlock: 10,
  },
});

export default TitleInput;