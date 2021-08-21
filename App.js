import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList, StyleSheet, View,Text } from 'react-native';
import Basic from './components/Basic'
import Header from './components/header'
export default function App() {
  const [todos,setTodos] =useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play a video game',key:'3'},
  ])
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/*to form */}
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) => (
            <Text>{item.text}</Text>
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40
  },
  list:{
    marginTop:20
  }
  
});
