import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import AddReminder from './screens/AddReminder'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddReminder" component={AddReminder} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
