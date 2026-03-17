import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import StudentsScreen from './screens/StudentsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BoxScreen from './screens/BoxScreen';
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';
import TodosScreen from './screens/TodosScreen';
import CommentsScreen from './screens/CommentsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitle: 'APP',
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Box" component={BoxScreen}/>
        <Stack.Screen name="Posts" component={PostsScreen}/>
        <Stack.Screen name="Users" component={UsersScreen}/>
        <Stack.Screen name="Todos" component={TodosScreen}/>
        <Stack.Screen name="Comments" component={CommentsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}