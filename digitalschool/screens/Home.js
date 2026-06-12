// React import and hooks
import React, { useCallback } from 'react';
// Basic React Native building blocks
import { View, Text, StyleSheet, Button } from 'react-native';
// Hook-based navigation utilities from React Navigation
import { useNavigation } from '@react-navigation/native';

// Home screen component (default export)
export default function Home() {
  // get the navigation object via hook (recommended for function components)
  const navigation = useNavigation();

  // memoized handler to navigate to the About screen
  const goToAbout = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  // memoized handler to open the drawer reliably even when nested
  const openDrawer = useCallback(() => {
    // attempt to open the parent drawer (when this screen is nested inside tabs/stacks)
    const parent = navigation.getParent();
    if (parent && typeof parent.openDrawer === 'function') {
      parent.openDrawer();
      return;
    }
    // fallback: call openDrawer on the current navigation object if available
    navigation.openDrawer && navigation.openDrawer();
  }, [navigation]);

  return (
    // main container for the Home screen
    <View style={styles.container}>
      {/* welcome text */}
      <Text>Welcome to Home Screen</Text>
      {/* button that navigates to the About screen */}
      <Button title="Go to About Screen" onPress={goToAbout} />

      {/* explanatory text for drawer behavior */}
      <Text style={{ marginTop: 16 }}>Drawer Navigation Button Functionality</Text>
      {/* button that opens the drawer */}
      <Button title="Open Drawer" onPress={openDrawer} />
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
