import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Pokédex',
            headerStyle : {
              backgroundColor : 'rgba(213,10,47,1)',
            },
            headerTintColor : '#FFF',
          }}
        />
        <Stack.Screen 
          name="Details"
          component={DetailsScreen}
          options={{ 
            title: 'Details',
            headerStyle : {
              backgroundColor : 'rgba(213,10,47,1)',
            },
            headerTintColor : '#FFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
