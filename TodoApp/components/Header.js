import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default function Header() {
    

    return (
        <View style={styles.content}>
            <Text style={styles.header}>
                My Todos
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        color:'#fff',
        fontSize:24,
        padding:20,
        fontWeight:'bold'
    },
    content:{
        backgroundColor:'coral',
        alignItems:'center'
    }
})
