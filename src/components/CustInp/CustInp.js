import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CustInp = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },
    input:{}
});


export default CustInp