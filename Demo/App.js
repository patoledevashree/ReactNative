import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  // const [name, setName] = useState('Devashree');
  // const [age , setAge] = useState('25')
  const [people, setPeople] = useState([
    { name: 'Jhon',id: '1' },
    { name: 'Mario',id: '2' },
    { name: 'Shaun',id: '3' },
    { name: 'Peter',id: '4' },
    { name: 'Elf',id: '5' },
    { name: 'Browser',id: '6' },
    { name: 'Harry',id: '7' },
    { name: 'Agile',id: '8' },
    { name: 'Doe',id: '9' },
    { name: 'Vickey',id: '10' }
  ]);

  const pressHandler = (id) =>{
    console.log(id);
  }
  // const clickHandler = () => {
  //   setName('Siddhu');
  // }
  return (
    // <View style={styles.class1}>
    //   <Text>Hello World!</Text>
    //   <Text>Welcome {name}</Text>
    //   <View style={styles.buttonText}>
    //     <Button title="Change Name" onPress={clickHandler}></Button>
    //   </View>

    // </View>

    // Text input Example
    // <View style={styles.class1}>
    //   <Text>Enter Name</Text>

    //   <TextInput
    //   style={styles.input}
    //   placeholder='e.g Jhon Doe'
    //   onChangeText={(val)=>{setName(val)}} />

    //   <Text>Enter Age</Text>

    //   <TextInput
    //   keyboardType='numeric'
    //   style={styles.input}
    //   placeholder='e.g 20'
    //   onChangeText={(val)=>{setAge(val)}} />

    //   <Text>Name: {name} Age:{age}</Text>
    // </View>

    //List and Scroll view Example
    // <View style={styles.class1}>
    //   <ScrollView>
    //     {
    //       people.map(item => (
    //         <View key={item.key}>
    //           <Text style={styles.item}>
    //             {item.name}
    //           </Text>
    //         </View>
    //       ))
    //     }
    //   </ScrollView>
    // </View>

    //FlatList
    <View>
      <FlatList
       horizontal={false}
       numColumns={2}
       key={'_'}
       keyExtractor={item => "_" + item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress ={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  class1: {
    marginTop: 40,
    paddingHorizontal: 30
    // fontWeight: 'bold',
    // alignItems: 'center',
    // flex: 1,
    // justifyContent: 'center'
  },
  buttonText: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: 200,
    height: 50,
    paddingTop: 20
  },
  item: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    backgroundColor: 'pink',
    padding: 30,
    marginTop:24,
    marginHorizontal:10
  }
});
