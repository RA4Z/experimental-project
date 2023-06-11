import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='Cadastro' component={Cadastro as React.FC} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}