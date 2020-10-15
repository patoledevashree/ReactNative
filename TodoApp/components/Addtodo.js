import React, { useState } from 'react';
import { Button, StyleSheet,Text, TextInput, TouchableOpacity, View } from 'react-native';

export function Addtodo({submitHandler}) {
    const [text,setText] = useState('');

    const changeHandler =(val)=>{
        setText(val);
    }

    return (
        <View style={styles.content}>
            <TextInput
            style={styles.text}
            placeholder ='add todo...'
            onChangeText={changeHandler}
            />
            <Button title='Add Todo' color="coral" onPress={() =>{submitHandler(text)}}></Button>
        </View>
    )
}


const styles= StyleSheet.create({
    text:{
       paddingHorizontal:30,
       paddingVertical:6,
      borderBottomWidth:1,
      marginTop:20


    },
})