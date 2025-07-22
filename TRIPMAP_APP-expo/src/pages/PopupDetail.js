import { View, Text, StyleSheet, Image, Button, Modal, TouchableOpacity, Alert } from 'react-native';
import RecommendationList from "../components/RecommendationList"
import CalendarSelector from "../components/CalendarSelector"
import { useState } from 'react';
import TimePickerStep from '../components/popup/TimePickerStep';

const PopupDetail = ({ onClose, region, visible }) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [step, setStep] = useState(1)
  const [departureTime, setDepartureTime] = useState(null)
  const [showTimePicker, setShowTimePicker] = useState(false)

    return (
       <Modal
            transparent 
            visible={visible} 
            statusBarTranslucent={true}
            animationType="slide"
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

                    {step === 1 && (
                        <>
                            <View style={styles.top}>
                                <Image source={region.image} style={styles.image} />
                                <RecommendationList region={region.name} />
                            </View>

                            <CalendarSelector
                                startDate={startDate}
                                endDate={endDate}
                                setStartDate={setStartDate}
                                setEndDate={setEndDate}
                            />

                            <Button
                                title="일정 생성하기"
                                onPress={() => {
                                    if (!startDate || !endDate) {
                                        Alert.alert('여행 기간을 선택해주세요.')
                                        return
                                    }
                                    setStep(2)
                                    setShowTimePicker(true)
                                }}
                            />
                        </>
                    )}

                    {step === 2 && (
                        <TimePickerStep
                            departureTime={departureTime}
                            setDepartureTime={setDepartureTime}
                            showTimePicker={showTimePicker}
                            setShowTimePicker={setShowTimePicker}
                            onConfirmDeparture={() => {
                            setShowTimePicker(false)
                                Alert.alert(
                                    `출발 시간: ${departureTime.toLocaleTimeString()}`
                                )
                            }}
                            onBack={() => {
                                setStep(1)
                                setShowTimePicker(false)
                            }}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    )}
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
        backgroundColor: '#fff',
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