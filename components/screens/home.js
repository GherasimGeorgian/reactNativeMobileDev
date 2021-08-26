import React,{useState} from 'react'
import { StyleSheet,View,Text,Button,FlatList,TouchableOpacity } from 'react-native'
import { useSelector,connect } from 'react-redux';



export default function Home({navigation}) {
    
   
    const smurfData  = useSelector((state)=> state.smurfData);
    const pressHandler = ()=>{
        navigation.navigate('ToDoScreen')
    }
 
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home screen</Text>
            <Button title="go to ToDoScreen" onPress={pressHandler}/>
             <View style={styles.list}>
            <FlatList
                keyExtractor={(item, index) =>  'key'+index}
                data={smurfData}
                renderItem={({item}) => (
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{item.title}</Text>
            )}
            />
          </View>
        
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
    },
    list:{
        marginTop:20,
        backgroundColor:'#ACF6F4',
      }
      
   
})
