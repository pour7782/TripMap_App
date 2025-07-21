import { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, FlatList } from 'react-native';
import DateSelector from '../components/popup/DateSelector';
import TimePickerStep from '../components/popup/TimePickerStep';
import { useNavigation } from '@react-navigation/native';

const ScheduleFlow = () => {
  const [step, setStep] = useState(1)
  const [departureTime, setDepartureTime] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const navigation = useNavigation()

  const goNext = () => setStep((prev) => prev + 1)
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>여행 날짜를 선택해주세요</Text>
          <DateSelector
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onCreateSchedule={() => {
              if (!startDate || !endDate) {
                Alert.alert('여행 기간을 선택해주세요.')
                return
              }
              goNext()
            }}
            onBack={() => navigation.goBack()}
          />
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.title}>출발 시간을 선택해주세요</Text>
          <TimePickerStep
            departureTime={departureTime}
            setDepartureTime={setDepartureTime}
            onConfirmDeparture={() => {
              if (!departureTime) {
                Alert.alert('출발 시간을 선택해주세요.')
                return
              }
              goNext()
            }}
            onBack={goBack}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  summaryContainer: { flex: 1 },
  summaryText: { fontSize: 18, marginVertical: 5 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
})

export default ScheduleFlow;
