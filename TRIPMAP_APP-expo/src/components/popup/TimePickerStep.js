import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const TimePickerStep = ({
  departureTime,
  setDepartureTime,
  showTimePicker,
  setShowTimePicker,
  onBack, startDate, endDate, region
}) => {
  const navigation = useNavigation()

  useEffect(() => {
    setShowTimePicker(true)
  }, [])

  const onChange = (event, selectedTime) => {
    if (event.type === 'dismissed') {
      setShowTimePicker(false)
      return
    }
    setShowTimePicker(false)
    setDepartureTime(selectedTime)
  }

  return (
    <View style={styles.container}>
      {showTimePicker && (
        <DateTimePicker
          value={departureTime || new Date()}
          mode="time"
          display="spinner"
          onChange={onChange}
        />
      )}

      <Text style={styles.title}>출발시간</Text>

      {departureTime && (
        <Text style={styles.selectedTime}>
          {departureTime.toLocaleTimeString()}
        </Text>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={onBack}
          hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>뒤로</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DepartureTransportationScreen', { departureTime, startDate, endDate })}
          hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>출발 시간 선택 완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  selectedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    width: '60%',
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginRight: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#999'
  },
  nextButton: {
    backgroundColor: "#000",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff'
  }
})

export default TimePickerStep;
