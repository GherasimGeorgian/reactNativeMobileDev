import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [name,setName] = useState('vasile') 
  const [age,setAge] = useState(40)
  const [people,setPeople] = useState([
    {name:'shaun',id:'1'},
    {name:'yoshi',id:'2'},
    {name:'mario',id:'3'},
    {name:'luigi',id:'4'},
    {name:'peach',id:'5'},
    {name:'toaf',id:'6'},
    {name:'brawono',id:'7'},
  ])
  const clickHandler = () =>{
    setName('Kiky')
    setAge(13)
  }

  const pressHandler = (id) =>{
    console.log(id);
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.id != id)
    })
  }
  //ceva
  return (
    <View style={styles.container}>
      <ScrollView>
       <View style={styles.header}>
          <Text style={styles.boldText}>Hello,my name is {name}</Text>
       </View>
       <View style={styles.body}>
          <Text style={styles.boldText}>His name is {name} and his age is {age}</Text>
          <Text>Lorem ipsum dolor sit amet</Text>
       </View>
       <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler}/>
       </View>
       <View>
         <Text>Enter name:</Text>
         <TextInput 
         multiline
         style={styles.input}
         placeholder='e.g. Jhon Ion'
         onChangeText={(val) => setName(val)}
         />
        <Text>Enter age:</Text>
         <TextInput 
         keyboardType='numeric'
         style={styles.input}
         placeholder='e.g. 43'
         onChangeText={(val) => setAge(val)}
         />

         <Text>name:{name},age: {age}</Text>
       </View>


    {/* <View style={styles.containerList}>
       {
         people.map((item) => {
           return(
             <View key={item.key}>
               <Text style={styles.item}>{item.name}</Text>
             </View>
           )
         })
       }
       </View> */}
      </ScrollView>
       <FlatList 
       numColumns={2}
       keyExtractor={(item) => item.id}
       data={people}
       renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
             <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
         
       )}
       />
     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
  },
  containerList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
  
  },
  header:{
    backgroundColor:"pink",
    padding:20,
  },
  boldText:{
    fontWeight:'bold'
  },
  body:{
    backgroundColor:"yellow",
    padding:20,
  },
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
  },
  
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
    marginHorizontal:10,
    marginTop:24

  }
  
});
