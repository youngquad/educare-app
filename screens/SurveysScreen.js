import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SurveysScreen() {
  return (
    <View style={styles.container}>
      <Text>Weekly Surveys will be here!</Text>
      <Button title="Start Survey" onPress={() => alert('Survey Started')} />
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
