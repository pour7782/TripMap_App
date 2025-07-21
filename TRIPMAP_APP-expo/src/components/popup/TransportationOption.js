import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TransportationOption = ({ option, onSelect, selected }) => {
  return (
    <TouchableOpacity
      style={[styles.optionContainer, selected && styles.selected]}
      onPress={() => onSelect(option)}
    >
      <Text style={styles.text}>{option.type} - {option.departure} - {option.duration} - {option.price}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  optionContainer: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
  },
  selected: {
    backgroundColor: '#cdefff',
  },
  text: {
    fontSize: 16,
  },
})

export default TransportationOption;
