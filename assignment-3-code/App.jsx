import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './Navigator';
import ProfileView from './view/ProfileView';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigator"
          component={Navigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="User Profile"
          component={ProfileView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
