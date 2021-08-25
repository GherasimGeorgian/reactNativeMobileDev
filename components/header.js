import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import useFonts  from '../assets/fonts/useFonts'
import {globalStyles} from '../styles/global'
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={globalStyles.titleText}>ToDo's</Text>
        </View>
    );  
  
 
}



const styles = StyleSheet.create({
    header: {
      height:80,
      paddingTop:38,
      backgroundColor:'coral',
      
    },
    titleText:{
        fontFamily:'myfont',
        fontSize:18,
        textAlign:'center',
         color:'black',
        
    }
 
    
  });
