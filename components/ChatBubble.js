import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatBubble({ message }) {
  return (
    <View style={styles.bubble}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#e1f5fe',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
