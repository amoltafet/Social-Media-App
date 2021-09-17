import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MessagesScreen from './screens/MessagesScreen';
import ChatScreen from './screens/ChatScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Stack() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Stack.Screen name="Message" component={Message} options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbox-ellipses-outline" color={color} size={size}/>),
          headerShown: false, 
          tabBarBadge: 5,
        })}/>
        <Stack.Screen name="Home" component={HomeScreen}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={size}/>),
        })} />
        <Stack.Screen name="Profile" component={ProfileScreen} 
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size}/>),
        })} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

function Message() {
  const MessageStack = createStackNavigator();
  return (
      <MessageStack.Navigator>
        <MessageStack.Screen name="Messages" component={MessagesScreen} />
        <MessageStack.Screen name="Chat" component={ChatScreen} />
      </MessageStack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});