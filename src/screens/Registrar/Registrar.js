import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const Registrar = () => {
  const {nombre, setNombre} = useState('');
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onBack2HomePressed = () =>{
    navigation.navigate('Home');
  }
  const onCreateAccPressed = () =>{
    navigation.navigate('ConfirmCode');
  }

  return (
    <View style={styles.root}>
      
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Registrar</Text>
      {/* Nombre Field */}
      <CustInp
      placeholder="Nomnbre"
      value={nombre}
      setValue={setNombre}/>
      {/* email Field */}
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
      text='Regresar'
      onPress={onBack2HomePressed}
      type='PRIMARY'/>
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Crear cuenta'
      onPress={onCreateAccPressed}
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

export default Registrar
