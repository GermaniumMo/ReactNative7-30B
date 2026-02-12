import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome to Lesson 5</Text>
      <Text style={styles.subText}>Use the header to open other screens.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#555',
  },
});

export default MainScreen;
