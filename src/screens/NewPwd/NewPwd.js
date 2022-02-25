import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const NewPwd = () => {
  const {email, setEmail} = useState('');
  const {codigo, setCodigo} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const onBack2Login = () =>{
    //navigation.navigate('InicioSesion');
  }
  const onChangePwd = () =>{
    navigation.navigate('InicioSesion');
  }

  return (
    <View style={styles.root}>
      
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Nueva Contraseña</Text>
      {/* email input */}
      <CustInp
      placeholder="Email"
      value={email}
      setValue={setEmail}/>
      {/* Código Field */}
      <CustInp
      placeholder="Código"
      value={codigo}
      setValue={setCodigo}/>
      {/* Password Field */}
      <CustInp
        placeholder = "Nueva contraseña"
        value = {password}
        setValue = {setPassword}
        secureTextEntry = {true}/>
      {/* Botón inicio sesión */}
      <CustBtn
      text='Volver a Login'
      onPress={onBack2Login}
      type='PRIMARY'/>
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Cambiar contraseña'
      onPress={onChangePwd}
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

export default NewPwd