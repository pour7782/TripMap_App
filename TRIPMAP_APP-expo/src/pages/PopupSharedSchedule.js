import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PopupSharedSchedule = ({ onClose, visible }) => {
    const insets = useSafeAreaInsets();

    return (
        <Modal
            transparent 
            visible={visible} 
            statusBarTranslucent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={[ styles.popup, { paddingBottom: insets.bottom }]}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <Text style={{ fontSize: 18 }}>✕</Text>
                    </TouchableOpacity>

                    <Text style={styles.titleText}>공유 일정</Text>

                    <TouchableOpacity
                        style={styles.downloadButton}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={() => {
                            onClose()
                        }}
                    >
                        <Text style={styles.downloadButtonText}>일정 다운 받기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    popup: {
        height: '33%',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        alignItems: 'center',
        bottom: 0,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 12,
        zIndex: 1,
    },
    downloadButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 16,
    },
})

export default PopupSharedSchedule;