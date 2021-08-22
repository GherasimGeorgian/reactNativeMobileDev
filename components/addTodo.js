import React,{useState} from 'react';
import { StyleSheet,Text,View,TextInput,Button } from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text,setText]=useState("");
    const changeHandler = (val) =>{
        setText(val);
    }
    const clickHandlerSubmit =(text) =>{
        submitHandler(text)
        this.textInput.clear()
    }

    return (
        <View>
            <TextInput
            stlye={StyleSheet.input}
            ref={input => { this.textInput = input }}
            placeholder='new todo...' onChangeText={(val) => changeHandler(val)}/>
            <Button onPress={() => clickHandlerSubmit(text)} title="add todo" color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
