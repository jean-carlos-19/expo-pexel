import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen,ImageScreen} from '@/views'
import { RootStackParamList } from '@/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Image" 
          component={ImageScreen}  
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}