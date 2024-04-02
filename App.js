import {View, Button,StyleSheet,Text} from 'react-native'
import Styll from './navbar.js'


export default function App(){
  return(
    <View style = {styles.main}> 
      <Styll style={{backgroundColor: "green"}}>42312321</Styll>
      <Styll style={{backgroundColor: "blue"}}>124</Styll>

     

    </View>
  );
  
}

const styles = StyleSheet.create({
  main:{
    flex: 1,

    marginTop:60,
    padding: 60,
    borderWidth: 5,

    
    justifyContent:'center',

  }
})