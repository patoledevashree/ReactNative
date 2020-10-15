import React, { Component } from 'react';
import {View,Text, Button}from 'react-native';
import {globalStyles} from '../styles/global'

class Details extends Component{
  render(){
      console.log(this.props);
    return(
      <View style={globalStyles.conatiner}>
          <Text style={globalStyles.title}>Details screen</Text>
          <Button title='View Top Tab'
          onPress ={()=>{this.props.navigation.navigate('TopTabs')}}></Button>


          <Button title='View Bottom Tab'
          onPress ={()=>{this.props.navigation.navigate('BottomTabs')}}></Button>
      </View>
    )
  }
}
export default Details