import React,{useState} from 'react';
import {  HeaderBackButton } from "react-navigation-stack";
import Home from "../components/screens/home";
import ReviewDetails from "../components/screens/reviewDetails";
import ToDoScreen from "../components/screens/TodoScreen";
import Login from '../components/screens/login'
import { createStackNavigator } from "@react-navigation/stack";


const HomeStack = createStackNavigator();
export default function myStacks() {
  return (
    <HomeStack.Navigator initialRouteName="Login" headerMode="screen"
    
    screenOptions={{
        headerShown: false
      }}
      >
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ReviewDetails" component={ReviewDetails} />
      <HomeStack.Screen name="ToDoScreen" component={ToDoScreen} />
    </HomeStack.Navigator>
  );
}