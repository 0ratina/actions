import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import App from './App';
import DetailsScreen from './DetailScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

export type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
    Setting: undefined;
}

export const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailsScreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;