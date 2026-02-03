import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigation} from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigation();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigation>
      <Stack.Screen name="Home" component={MainScreen}></Stack.Screen>
    </Stack.Navigation>
   </NavigationContainer>
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
