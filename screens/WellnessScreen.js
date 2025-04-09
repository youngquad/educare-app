import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WellnessScreen() {
  return (
    <View style={styles.container}>
      <Text>Daily Wellness Tips and Meditations</Text>
      <Button title="Start Meditation" onPress={() => alert('Meditation Started')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
