import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import StudentInfoScreen from './screens/StudentInfoScreen';
import HobbiesScreen from './screens/HobbiesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Hobbies"
        screenOptions={{
          headerTitle: 'APP',
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="StudentInfo" component={StudentInfoScreen} />
        <Stack.Screen name="Hobbies" component={HobbiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
