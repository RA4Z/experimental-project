import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';

import Tabs from './pages/Tabs';
import Exercicio from './pages/Tabs/Explorar/Exercicio';
import Configuracoes from './pages/Configuracoes';
import User from './pages/Tabs/Explorar/User';

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='Cadastro' component={Cadastro as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='RecuperarSenha' component={RecuperarSenha as React.FC} options={{headerShown:false}} />

                <Tab.Screen name='Tabs' component={Tabs as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='Configuracoes' component={Configuracoes as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='Exercicio' component={Exercicio as React.FC} options={{headerShown:false}} />
                <Tab.Screen name='User' component={User as React.FC} options={{headerShown:false}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}