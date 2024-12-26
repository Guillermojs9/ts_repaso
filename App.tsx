import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

type RootStack = {
  Home: undefined,
}

const Stack = createNativeStackNavigator<RootStack>();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to Home Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;