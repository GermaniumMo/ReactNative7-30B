/**
 * Root entry for the digitalschool app.
 * - Initialize gesture handling
 * - Provide safe-area context
 * - Mount the React Navigation container and root navigator
 */

// Must be imported before any other library that uses gesture handling
import 'react-native-gesture-handler';
// React is required to use JSX and create components
import React from 'react';
// Provides a native root view for react-native-gesture-handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Supplies safe-area insets (notch, status bar, rounded corners) to children
import { SafeAreaProvider } from 'react-native-safe-area-context';
// NavigationContainer holds the navigation state and linking configuration
import { NavigationContainer } from '@react-navigation/native';
// App's top-level navigator (drawer that composes tabs/stacks)
import DrawerNavigator from './navigation/DrawerNavigator';

// Default exported App component - mounted by the app registry
export default function App() {
  // The app tree must be wrapped with these providers in this order:
  // 1) GestureHandlerRootView — enables native gestures
  // 2) SafeAreaProvider — makes safe-area insets available
  // 3) NavigationContainer — provides navigation context/state
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* GestureHandlerRootView: required top-level container for gestures */}
      <SafeAreaProvider>
        {/* SafeAreaProvider: exposes safe-area insets to descendant components */}
        <NavigationContainer>
          {/* NavigationContainer: manages navigation tree and state */}
          <DrawerNavigator />
          {/* DrawerNavigator: the app's root navigator (drawer -> tabs/stacks) */}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
