import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../services/firebase';  // Firebase service
import { doc, setDoc } from 'firebase/firestore';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');

  const submitFeedback = async () => {
    const feedbackRef = doc(db, 'feedback', 'userFeedback');
    await setDoc(feedbackRef, { feedback });
    alert('Feedback submitted!');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Provide your feedback..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
