import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import User from './pages/user';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{
          title: 'LOGIN',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name='main' component={Main} options={{
          title: 'Github VIEWER',
          headerLeft: null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>
        <Stack.Screen name='user' component={User} options={{
          title: 'Perfil do Usuário',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#3498db',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}