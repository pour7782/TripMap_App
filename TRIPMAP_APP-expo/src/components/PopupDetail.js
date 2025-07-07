import { View, Text, StyleSheet, Image, Button, Modal, TouchableOpacity } from 'react-native';
import RecommendationList from "./RecommendationList";
import CalendarSelector from "./CalendarSelector";

const PopupDetail = ({ onClose, region }) => {
    return (
       <Modal
            transparent={true}
            animationType="slide"
            visible={true}
        >
            <View style={styles.modalBackground}>
                <View style={styles.popup}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <Text style={{ fontSize: 18 }}>✕</Text>
                    </TouchableOpacity>

                    <View style={styles.top}>
                        <Image source={region.image} style={styles.image} />
                        <RecommendationList region={region.name} />
                    </View>

                    <CalendarSelector />

                    <Button title="일정 생성하기" onPress={() => {}} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    top: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 12,
        zIndex: 1,
    },
})

export default PopupDetail;