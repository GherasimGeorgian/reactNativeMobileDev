import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList, StyleSheet, View,Text,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Basic from '../Basic'
import Header from '../header'
import ToDoItem from '../todoItem';
import AddTodo from '../addTodo';

export default function ToDoScreen() {
    const [todos,setTodos] =useState([
      {text:'buy coffee',key:'1'},
      {text:'create an app',key:'2'},
      {text:'play a video game',key:'3'},
    ])
  
    const pressHandler = (key) =>{
      setTodos((prevTodos) =>{
        return prevTodos.filter(todo => todo.key != key)
      });
    }
    const submitHandler =(text) => {
  
      if(text.length > 3){
        setTodos((prevTodos) => {
          return[{text:text,key:Math.random().toString()},
            ...prevTodos
          ]
        })
      }else{
        Alert.alert("Oops!","Todos must be over 3 chars long!",[
          {text:'Understand',onPress:() => console.log('alert closed')}
        ])
      }
  
  
      
    } 
  
    return (
      // <Sandbox />
      //<Basic />
      <TouchableWithoutFeedback onPress={()=>{
        //console.log('dissmised keyboard')
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item}) => (
              <ToDoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content:{
      padding:40,
      backgroundColor:'#ACF6F4',
      flex:1
    },
    list:{
      marginTop:20,
      backgroundColor:'#ACF6F4',
    }
    
  });