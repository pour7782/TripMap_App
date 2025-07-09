import { Modal, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PopupSharedSchedule = ({ onClose, visible }) => {
    const insets = useSafeAreaInsets()

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={[styles.popup, {paddingBottom: insets.top - 100}]}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <Text style={{ fontSize: 18 }}>✕</Text>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 30, fontSize: 16, }}>
                        공유 일정
                    </Text>
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
    },
    popup: {
        height: '33%',
        backgroundColor: '#d3d3d3',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 10,
        borderWidth: 13,
        borderColor: '#ccc',
        padding: 20,
        paddingBottom: 30,
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 12,
        zIndex: 1,
    },
})

export default PopupSharedSchedule;