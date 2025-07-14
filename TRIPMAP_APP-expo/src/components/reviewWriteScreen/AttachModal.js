import { View, Text, Modal, Pressable, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';

// 후기 작성페이지 파일 선택 클릭 시 나오는 화면
const AttachModal = ({ visible, onClose }) => {
  const onSelectPhoto = () => {
    Alert.alert('사진 선택 기능은 추후 구현 예정입니다.');
    onClose();
  };

  const onSelectVideo = () => {
    Alert.alert('동영상 선택 기능은 추후 구현 예정입니다.');
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      statusBarTranslucent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>첨부하기</Text>

            <Pressable style={styles.modalButton} onPress={onSelectPhoto}>
              <Text style={styles.modalButtonText}>사진 선택</Text>
            </Pressable>

            <Pressable style={styles.modalButton} onPress={onSelectVideo}>
              <Text style={styles.modalButtonText}>동영상 선택</Text>
            </Pressable>

            <Pressable
              style={[styles.modalButton, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={[styles.modalButtonText, styles.cancelButtonText]}>
                취소
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 18,
    textAlign: 'center',
    color: '#333',
  },
  modalButton: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
  cancelButton: {
    borderBottomWidth: 0,
    marginTop: 10,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#fff',
  },
})

export default AttachModal;