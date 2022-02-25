import React, { useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'

//mis imports
import Logo from '../../../assets/imagenes/logo.png';
//componentes :D
import CustInp from '../../components/CustInp/CustInp';
import CustBtn from '../../components/CustBtn/CustBtn';

const Talk2Back = () => {
  const {height} = useWindowDimensions();

  const onTalk2Back = () =>{
    console.warn("Inició Sesión");
  }
  

  return (
    <View style={styles.root}>
      {/* Dibujito pa decorar */}
      <Image
      source={Logo}
      style={[styles.logo, {height:height*0.3}]}
      resizeMode="contain"/>
      <Text>Hablar con Back</Text>
      {/* Botón Olvidé contraseña */}
      <CustBtn 
      text = 'Hablar con Back'
      onPress={onTalk2Back}
      type = 'SECONDARY'/>
      <Text>Mensaje del back:</Text>

      <Text>YYYY-MM-DD</Text>
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

export default Talk2Back