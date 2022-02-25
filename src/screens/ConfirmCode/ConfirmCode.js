import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const ConfirmCode = () => {
  const {email, setEmail} = useState('');
  const {code, setCode} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onConfCodePressed = () =>{
    //confirmar código
    //navigation.navigate('InicioSesion');
  }
  const onResendCodePressed = () =>{
    //reenviar código
    //navigation.navigate('InicioSesion');
  }

  return (
    <View style={styles.root}>
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Confirmar Código</Text>
      {/* email input */}
      <CustInp
      placeholder="Email"
      value={email}
      setValue={setEmail}/>

      {/* Código Field */}
      <CustInp
        placeholder = "Código"
        value = {code}
        setValue = {setCode}
        secureTextEntry = {false}/>

      {/* Botón inicio sesión */}
      <CustBtn
      text='Confirmar código'
      onPress={onConfCodePressed}
      type='PRIMARY'/>
      
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Reenviar código'
      onPress={onResendCodePressed}
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

export default ConfirmCode