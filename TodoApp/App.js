import React, { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Addtodo } from './components/Addtodo';
import Header from './components/Header';
import { Todos } from './components/Todos';


export default function App() {

  const [todo, setAction] = useState([
    { text: 'Buy A Coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  const pressHandler = (key) => {
    setAction((prevTodo) => {
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setAction((prevTodos) => {
        return [
          { text: text, key: Math.random.toString() },
          ...prevTodos
        ]
      })
    }
    else {
      Alert.alert('OOPS!', 'Todos must be 3 char long', [
        { text: 'Understood' }
      ]);
    }

  }

  return (

    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* {Header} */}
        <Header></Header>
        <View style={styles.content}>
          {/* { Todo Form} */}
          <Addtodo submitHandler={submitHandler}></Addtodo>
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <Todos item={item} pressHandler={pressHandler}></Todos>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 40,
    marginTop: 20
  },
  list: {
    padding: 20
  }
})
