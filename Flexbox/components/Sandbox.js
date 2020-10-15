import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default function Sandbox() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>Box 1</Text>
            <Text style={styles.boxTwo}>Box 2</Text>
            <Text style={styles.boxThree}>Box 3</Text>
            <Text style={styles.boxFour}>Box 4</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#ddd'
    },
    boxOne:{
        backgroundColor:'violet',
        padding :10
    },
    boxTwo:{
        backgroundColor:'gold',
        padding :10
    },
    boxThree:{
        backgroundColor:'coral',
        padding :10
    },
    boxFour:{
        backgroundColor:'skyblue',
        padding :10
    }
})
