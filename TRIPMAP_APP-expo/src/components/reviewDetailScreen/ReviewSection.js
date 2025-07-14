import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ReviewSection = ({ heading, content }) => (
  <View>
    <Text style={styles.subHeading}>{heading}</Text>
    <Text style={styles.body}>{content || '이 부분은 아직 작성되지 않았습니다.'}</Text>
  </View>
);

const styles = StyleSheet.create({
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  body: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    lineHeight: 24,
  },
});

export default ReviewSection;
