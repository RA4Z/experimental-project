import React, { lazy, Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Loading from './pages/Loading';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/RecuperarSenha';

import Tabs from './pages/Tabs';
import Configuracoes from './pages/Configuracoes';
import User from './pages/Tabs/Explorar/User';

import Exercicio from './pages/Tabs/Explorar/Exercicio';
import Recordes from './pages/Tabs/Explorar/Exercicio/Recordes';

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login as React.FC} options={{ headerShown: false }} />
                <Tab.Screen name='Cadastro' component={Cadastro as React.FC} options={{ headerShown: false }} />
                <Tab.Screen name='RecuperarSenha' component={RecuperarSenha as React.FC} options={{ headerShown: false }} />

                <Tab.Screen name='Tabs' component={Tabs as React.FC} options={{ headerShown: false }} />
                <Tab.Screen name='Configuracoes' component={Configuracoes as React.FC} options={{ headerShown: false }} />
                <Tab.Screen name='User' component={User as React.FC} options={{ headerShown: false }} />

                <Tab.Screen name='Recordes' component={Recordes as React.FC} options={{ headerShown: false }} />
                <Tab.Screen name='Exercicio' component={Exercicio as React.FC} options={{ headerShown: false }} />

                <Tab.Screen name='Loading' component={Loading as React.FC} options={{ headerShown: false }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}