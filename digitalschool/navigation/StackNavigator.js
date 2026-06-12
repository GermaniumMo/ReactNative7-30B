// Import React core to use JSX and components
import React from 'react';
// Use the native-stack implementation for better native behavior and performance
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the screens that will be registered on the stacks
import Home from '../screens/Home';
import About from '../screens/About';

// Create a native stack navigator instance
const Stack = createNativeStackNavigator();

// Shared default options for all stack screens (consistent styling)
const defaultScreenOptions = {
  headerStyle: { backgroundColor: '#384053' }, // header background color (modern 2026 theme)
  headerTintColor: '#fff', // header text/icon color
  headerTitleStyle: { fontWeight: 'bold' }, // header title font weight
};

// Main stack that contains screens related to the Home tab
function MainStackNavigator() {
  return (
    // Navigator uses the shared defaultScreenOptions and starts on Home
    <Stack.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
      {/* Register the Home screen on this stack */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

// A small wrapper stack for About (kept for parity in cases where About grows)
function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      {/* Register the About screen */}
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

// Named exports for use in other navigators; default export remains MainStack
export { MainStackNavigator, AboutStackNavigator };
export default MainStackNavigator;
