import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Feed from './screens/Feed';
import Details  from "./screens/Details";

import Screen1 from './screens/drawer/Screen1';
import Screen2 from './screens/drawer/Screen2';
import Screen3 from './screens/drawer/Screen3';

import Tab1 from './screens/tabs/Tab1';
import Tab2 from './screens/tabs/Tab2';
import Tab3 from './screens/tabs/Tab3';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from 'react-native';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();

export default class App extends Component {

  render() {
    createHomeStack = ({ navigation }) =>
      <Stack.Navigator>
        <Stack.Screen name='Feed' component={Feed} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><Text>Nav</Text></TouchableOpacity>) }} />
        <Stack.Screen name= 'Details'component={Details} />
        <Stack.Screen name= 'TopTabs'component={createTopTabs} />
        <Stack.Screen name= 'BottomTabs'component={createBottomTabs} />

      </Stack.Navigator>

    createContactStack = ({ navigation }) =>
      <Stack.Navigator>
        <Stack.Screen name='Contact' component={Screen1} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><Text>Nav</Text></TouchableOpacity>) }} />
        
      </Stack.Navigator>

    createFavouriteStack = ({ navigation }) =>
      <Stack.Navigator>
        <Stack.Screen name='Favourite' component={Screen2} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><Text>Nav</Text></TouchableOpacity>) }} />
       
      </Stack.Navigator>

    createSettingStack = ({ navigation }) =>
      <Stack.Navigator>
        <Stack.Screen name='Setting' component={Screen3} options={{ headerLeft: () => (<TouchableOpacity onPress={navigation.openDrawer}><Text>Nav</Text></TouchableOpacity>) }} />
      </Stack.Navigator>

      createBottomTabs=() =>{
        return (
          <MaterialBottomTab.Navigator>
            <MaterialBottomTab.Screen name='Tab1' component={Tab1} />
            <MaterialBottomTab.Screen name='Tab2' component={Tab2} />
            <MaterialBottomTab.Screen name='Tab3' component={Tab3} />
          </MaterialBottomTab.Navigator>
        )
      }

      createTopTabs=() =>{
        return (
          <MaterialTopTab.Navigator>
            <MaterialTopTab.Screen name='Tab1' component={Tab1} />
            <MaterialTopTab.Screen name='Tab2' component={Tab2} />
            <MaterialTopTab.Screen name='Tab3' component={Tab3} />
          </MaterialTopTab.Navigator>
        )
      }


    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' children={createHomeStack} />
          <Drawer.Screen name='Contacts' component={createContactStack} />
          <Drawer.Screen name='Favourite' component={createFavouriteStack} />
          <Drawer.Screen name='Settings' component={createSettingStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}