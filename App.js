import React,{useState} from 'react';
import Basic from './components/Basic'
import Sandbox from './components/sandbox';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'
import {Provider} from 'react-redux';
import useFonts  from './assets/fonts/useFonts'
import store from './redux/store';



export default function App() {
 

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };


  if (!IsReady) {
    return (
     
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
        
    );
  }else{
    return (
      <Provider store={store}>
        <Navigator />
        </Provider>    
    );  
  }
 
}

