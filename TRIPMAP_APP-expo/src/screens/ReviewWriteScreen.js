import { useState } from 'react';
import { Text, ScrollView, Pressable, Alert, StyleSheet, } from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';
import TitleInput from '../components/TitleInput';
import CategorySelector from '../components/CategorySelector';
import ReviewContentInput from '../components/ReviewContentIput';
import AttachModal from '../components/AttachModal';
import { useNavigation } from '@react-navigation/native';

const ReviewWriteScreen = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [shareSchedule, setShareSchedule] = useState(true)
  const [attachVisible, setAttachVisible] = useState(false)

  const navigation = useNavigation()

  const onSubmit = () => {
    Alert.alert('알림', '작성 완료되었습니다.', [
      { text: '확인', onPress: () => navigation.navigate('MainScreen') },
    ])
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <HeaderBackButton onBack={() => navigation.goBack()} />

        <TitleInput title={title} setTitle={setTitle} />
        <CategorySelector shareSchedule={shareSchedule} setShareSchedule={setShareSchedule} />

        <ReviewContentInput content={content} setContent={setContent} />

        <Text style={styles.label}>사진/영상 첨부</Text>
        <Pressable
          style={styles.attachButton}
          onPress={() => setAttachVisible(true)}
        >
          <Text style={styles.attachText}>파일 선택</Text>
        </Pressable>

        <Pressable style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>작성 완료</Text>
        </Pressable>
      </ScrollView>

      <AttachModal visible={attachVisible} onClose={() => setAttachVisible(false)} />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 28,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  attachButton: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
    flex: 1,
  },
  attachText: {
    color: '#000',
    fontSize: 14,
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default ReviewWriteScreen;