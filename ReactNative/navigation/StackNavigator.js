import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import BoxScreen from '../screens/BoxScreen';
import ButtonScreen from '../screens/ButtonScreen';
import CommentsScreen from '../screens/CommentsScreen';
import CountriesScreen from '../screens/CountriesScreen';
import Home from '../screens/Home';
import ListScreen from '../screens/ListScreen';
import MenuScreen from '../screens/MenuScreen';
import PhotosScreen from '../screens/PhotosScreen';
import PostsScreen from '../screens/PostsScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import StudentsScreen from '../screens/StudentsScreen';
import TodosScreen from '../screens/TodosScreen';
import UsersScreen from '../screens/UsersScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#FF6347',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Button" component={ButtonScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Students" component={StudentsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Box" component={BoxScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Todos" component={TodosScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Photos" component={PhotosScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Countries" component={CountriesScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
}

function AboutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, AboutStackNavigator };
export default MainStackNavigator;
