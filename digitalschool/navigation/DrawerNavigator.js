// React core import
import React from 'react';
// Drawer navigator from React Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
// Bottom tab navigator that provides the Home + About tabs
import BottomTabNavigator from './TabNavigator';
// Import About directly to keep drawer entries simple (no extra stack nesting)
import About from '../screens/About';

// Create a drawer navigator instance
const Drawer = createDrawerNavigator();

// DrawerNavigator composes the bottom tabs and a direct About entry in the drawer
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* Drawer entry for Home (which contains tabs/stacks) */}
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      {/* Drawer entry for About rendered directly to avoid redundant nesting */}
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
