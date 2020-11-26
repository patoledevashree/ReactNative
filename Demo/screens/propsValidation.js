import React from 'react';
import {View, Text} from 'react-native';
import PropsType from 'prop-types';

export function Propsvalidation(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>{props.name}</Text>
      <Text style={{fontSize: 20}}>{props.age}</Text>
      {console.log('true', 1)}
    </View>
  );
}

Propsvalidation.propTypes = {
  name: PropsType.string,
  age: PropsType.number,
};
