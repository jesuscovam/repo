import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const ForgotPwd = () => {
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onBack2Login = () =>{
    navigation.navigate('InicioSesion');
  }
  const onSendCodeVer = () =>{
    navigation.navigate('ConfirmCode');
  }

  return (
    <View style={styles.root}>
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Olvidé mi contraseña</Text>
      {/* email input */}
      <CustInp
      placeholder="Email"
      value={email}
      setValue={setEmail}/>


      {/* Botón inicio sesión */}
      <CustBtn
      text='Volver a Inicio de sesión'
      onPress={onBack2Login}
      type='PRIMARY'/>
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Enviar código'
      onPress={onSendCodeVer}
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


export default ForgotPwd