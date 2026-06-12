// initialize gesture handler at the very top-level of the app
import 'react-native-gesture-handler';
// import React to enable JSX and component definitions
import React from 'react';
// GestureHandlerRootView provides the root view required by react-native-gesture-handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// SafeAreaProvider gives access to safe area insets (notch, status bar, etc.)
import { SafeAreaProvider } from 'react-native-safe-area-context';
// NavigationContainer is the root provider for React Navigation state
import { NavigationContainer } from '@react-navigation/native';
// The top-level drawer navigator that composes tabs/stacks
import DrawerNavigator from './navigation/DrawerNavigator';

// Default export for the root App component
export default function App() {
  // Render the application tree with required providers
  return (
    // GestureHandlerRootView must wrap the app to enable native gesture handling
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* SafeAreaProvider exposes safe-area insets to children */}
      <SafeAreaProvider>
        {/* NavigationContainer holds navigation state and linking configuration */}
        <NavigationContainer>
          {/* App's root navigator (drawer) */}
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
