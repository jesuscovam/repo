import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//navegación
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//componentes
import ConfirmCode from '../screens/ConfirmCode';
import ForgotPwd from '../screens/ForgotPwd';
import Home from '../screens/Home';
import InicioSesion from '../screens/InicioSesion'; 
import NewPwd from '../screens/NewPwd';
import Registrar from '../screens/Registrar';
import Talk2Back from '../screens/Talk2Back';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="ConfirmCode" component={ConfirmCode}/>
        <Stack.Screen name="ForgotPwd" component={ForgotPwd}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="InicioSesion" component={InicioSesion}/>
        <Stack.Screen name="NewPwd" component={NewPwd}/>
        <Stack.Screen name="Register" component={Registrar}/>
        <Stack.Screen name="Talk2Back" component={Talk2Back}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


//nota: Me traumé en esta parte.

export default Navigation;