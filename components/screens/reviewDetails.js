import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native'
export default function ReviewDetails({ route: { params },navigation  }) {
    
    const pressHandler =() =>{
        //navigation.goBack();
        navigation.navigate("Home")
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleReviewDet}>Review Details screen</Text>
            <Text>ID: {params.item._id}</Text>
            <Text>Title: {params.item.title}</Text>
            
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