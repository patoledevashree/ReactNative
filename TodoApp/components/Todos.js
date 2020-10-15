import React from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';

export function Todos({item,pressHandler}) {
  

    return (
        <TouchableOpacity onPress ={()=>{pressHandler(item.key)}}>
            <Text style={styles.items}>{item.text}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    items:{
        marginTop:20,
        borderWidth:1,
        borderColor:'#777',
        borderStyle:'dashed',
        padding:20,
        borderRadius:10,
        fontWeight:'bold',
        fontSize:18
    }
})
