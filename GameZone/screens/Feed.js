import React, { Component } from 'react';
import {View,Text, Button}from 'react-native';
import {globalStyles} from '../styles/global'

class Feed extends Component{
  render(){
    return(
      <View style={globalStyles.conatiner}>
          <Text style={globalStyles.title}>Navigation Drawer</Text>
          <Button title='Go to Feed item'
          onPress ={()=>{this.props.navigation.navigate('Details',{screenname: 'Details Screen'})}}></Button>
      </View>
    )
  }
}
export default Feed