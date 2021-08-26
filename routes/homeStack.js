import React,{useState} from 'react';
import {  createStackNavigator,HeaderBackButton } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/screens/home";
import ReviewDetails from "../components/screens/reviewDetails";
import ToDoScreen from "../components/screens/TodoScreen";
import Login from '../components/screens/login'
const screens = {
    Login:{
        screen:Login
    },
    Home:{
        screen:Home
    },
    ReviewDetails:{
        screen:ReviewDetails,
        // navigationOptions: ({ navigation }) => ({
        //     headerLeft: (<HeaderBackButton onPress={_ => navigation.navigate("Home")}/>)
        // })
    },
    ToDoScreen:{
        screen:ToDoScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (<HeaderBackButton onPress={_ => navigation.navigate("ReviewDetails")}/>)
        })
    }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)