import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome to About Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
