import {View, StyleSheet,Text} from 'react-native'

export default function styll({style,children}){
  return(
    <View style={[styles.box,style]}>
      <Text style = {styles.text}>{children}</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  box:{
    backgroundColor: 'white',
    padding: 20,

  },
  text:{   
   
    
    fontSize: 24,
    textAlign: 'center',
    fontWeight:'bold',
    color:'white'
  }
})