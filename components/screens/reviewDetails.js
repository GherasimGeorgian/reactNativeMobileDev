import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native'
export default function ReviewDetails({navigation}) {
    
    const pressHandler =() =>{
        //navigation.goBack();
        navigation.navigate("Home")
    }
    
    return (
        <View style={styles.container}>
            <Text>Review Details screen</Text>
            <Button title="go to HomeScreen" onPress={pressHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24,
       
    },
   
})