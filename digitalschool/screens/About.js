// React import and hooks
import React, { useCallback } from 'react';
// Basic React Native primitives
import { View, Text, StyleSheet, Button } from 'react-native';
// useNavigation gives access to navigation methods inside function components
import { useNavigation } from '@react-navigation/native';

// About screen component
export default function About() {
  // navigation object from the hook
  const navigation = useNavigation();

  // memoized handler to navigate back to Home
  const goHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    // container for the About screen
    <View style={styles.container}>
      {/* heading text */}
      <Text>Welcome to About Screen</Text>
      {/* button that navigates back to Home */}
      <Button title="Go back to Home" onPress={goHome} />
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
