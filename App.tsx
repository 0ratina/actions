
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import RootStackNavigator from './RootStackNavigator';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>

  );
}

export default App;
