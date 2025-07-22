import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import CalendarSelector from '../CalendarSelector';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

const DateSelector = ({ startDate, endDate, setStartDate, setEndDate, onCreateSchedule, onBack }) => {
  const { user } = useAuth()
  const navigation = useNavigation()

  const handleCreateSchedule = () => {
    if (!user) {
      navigation.replace("LoginPage")
      return
    }
    onCreateSchedule()
  }

  return (
    <View>
      <CalendarSelector
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <View style={styles.buttons}>
        <TouchableOpacity
	        onPress={handleCreateSchedule}
          hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>일정 선택 완료</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onBack}
          hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>뒤로</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttons: {
    marginTop: 20,
    width: 'auto',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginTop: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#999',
    textAlign: 'center'
  },
  nextButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default DateSelector;
