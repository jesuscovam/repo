import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';

//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const InicioSesion = () => {
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onLogInPressed = () =>{
    navigation.navigate('Talk2Back');
  }
  const onForgPwdPressed = () =>{
    navigation.navigate('ForgotPwd');
  }

  return (
    <View style={styles.root}>
      
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Inicio de sesión</Text>
      {/* email input */}
      <CustInp
      placeholder="Email"
      value={email}
      setValue={setEmail}/>
      {/* Password Field */}
      <CustInp
        placeholder = "Password"
        value = {password}
        setValue = {setPassword}
        secureTextEntry = {true}/>
         {/* Botones */}
      {/* Botón inicio sesión */}
      <CustBtn
      text='Iniciar sesión'
      onPress={onLogInPressed}
      type='PRIMARY'/>
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Olvidé mi contraseña'
      onPress={onForgPwdPressed}
      type = 'SECONDARY'/>

    </View>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: '70%',
    height: '70%',
    maxWidth: 300,
    maxHeight: 300
  },
  root:{
    padding: 20,
    alignItems: 'center'
  }
});

export default InicioSesion
