import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../styles/global';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={globalStyles.center}>
        <Text style={globalStyles.title}>Settings</Text>
      </View>
    );
  }
}