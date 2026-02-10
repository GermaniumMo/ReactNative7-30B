import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './screens/ListScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
