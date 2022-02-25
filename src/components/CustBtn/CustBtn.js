import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustBtn = ({onPress, text, type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`c_${type}`]]}>
      <Text style={[styles.text, , styles[`t_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    //botón global
    container:{
        backgroundColor: '#2196F3',
        alignItems: 'center',
        borderBottomWidth:2,
        borderRadius: 5,
        width: '100%',
        padding: 15,
        marginVertical: 5,
    },
    c_PRIMARY:{
      backgroundColor: '#1565C0',
      alignItems: 'center',
      borderBottomWidth:2,
      borderRadius: 5,
      width: '100%',
      padding: 15,
      marginVertical: 5,
    },
    c_SECONDARY:{
      backgroundColor: 'white',
      borderColor : '#90A4AE',
      alignItems: 'center',
      borderBottomWidth:2,
      borderRadius: 5,
      width: '100%',
      padding: 15,
      marginVertical: 5,
    },
    text:{
        color:'white',
        fontWeight: 'bold'
    },
    t_SECONDARY:{
      color:'#757575',
      fontWeight: 'bold'
  }


});

export default CustBtn