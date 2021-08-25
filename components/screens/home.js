import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native'
export default function Home({navigation}) {
    
    
    
    const pressHandler = ()=>{
        navigation.navigate('ToDoScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home screen</Text>
            <Button title="go to ToDoScreen" onPress={pressHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24,
       
    },
    title:{
        fontFamily:'myfont',
        fontSize:18
    }
   
})