import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import InfoTab from '../components/tabs/infoTab';
import Login from '../pages/login';
import Player from '../pages/player';
import Players from '../pages/players';
import { WebSocketProvider } from './ws';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <WebSocketProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' screenOptions={{ gestureEnabled: false, headerShown: false }} >
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Players' component={Players} />
                    <Stack.Screen name='Player' component={Player} />
                    <Stack.Screen name='Docs' component={InfoTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </WebSocketProvider>
    );
}

export default Navigation;