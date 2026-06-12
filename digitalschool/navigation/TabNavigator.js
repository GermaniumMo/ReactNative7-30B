// React import for JSX and components
import React from 'react';
// Bottom tab navigator to create the tab bar UI
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Vector icons used in the tab bar
import { MaterialCommunityIcons } from '@expo/vector-icons';
// The Home stack that groups Home-related screens
import { MainStackNavigator } from './StackNavigator';
// About screen rendered directly in the tab to reduce nesting
import About from '../screens/About';

// Create the bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Styling for the tab bar (shared)
const tabBarStyle = {
  backgroundColor: '#384053', // modern 2026 theme color
};

// BottomTabNavigator composes the main Home stack and the About screen
export default function BottomTabNavigator() {
  return (
    // Tab navigator with some shared screenOptions
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // hide header because stacks provide headers where needed
        tabBarActiveTintColor: '#fff', // active tab icon/text color
        tabBarInactiveTintColor: 'lightgray', // inactive color
        tabBarStyle, // apply our tab bar styling
        tabBarLabelStyle: {
          fontSize: 12, // label font size
        },
      }}
    >
      {/* Home tab renders the Main stack navigator */}
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />

      {/* About tab renders the About screen directly to simplify nesting */}
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="video-stabilization" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
