import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native'
export default function ReviewDetails({navigation}) {
    
    const pressHandler =() =>{
        //navigation.goBack();
        navigation.navigate("Home")
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleReviewDet}>Review Details screen</Text>
            <Text>ID: {navigation.getParam("_id")}</Text>
            <Text>Title: {navigation.getParam("title")}</Text>
            
            <Button title="go to HomeScreen" onPress={pressHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:24,
       
    },
    titleReviewDet:{
        fontFamily:'myfont',
        fontSize:30
    }
   
})