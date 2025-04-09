import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const users = [
  { name: 'Alice', age: 22, gender: 'Female', interests: ['Coding', 'Music'] },
  { name: 'Bob', age: 25, gender: 'Male', interests: ['Football', 'Art'] },
];

export default function MatchScreen() {
  const [matches, setMatches] = useState([]);

  const handleMatch = (user) => {
    setMatches((prev) => [...prev, user]);
  };

  return (
    <View style={styles.container}>
      <Text>Swipe to find your match!</Text>
      <Swiper
        cards={users}
        renderCard={(user) => (
          <View style={styles.card}>
            <Text>{user.name}, {user.age}</Text>
            <Text>{user.interests.join(', ')}</Text>
          </View>
        )}
        onSwipedRight={handleMatch}
        backgroundColor={'#f7f7f7'}
        stackSize={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowColor: '#000',
  },
});
