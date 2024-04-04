import {View, Button,StyleSheet,Text,Modal} from 'react-native'
import React,{useState} from 'react';


let soct = 1
let upPrice = 10
let upPrice1 = 30
let upPrice2 = 50
export default function App(){
  const [counter,setcounter]=useState(0)
  const [isModalVisible,setModalVisible] = useState(0)

  function increment(){
    setcounter(counter+soct)
  }
  return(
    <View style = {styles.main}>
      <Text style = {styles.score}>Счёт {counter}</Text> 
      <View style ={styles.but} >
      <Button onPress={increment} title='Press'/>
      <Button onPress={()=> setModalVisible(true)} title = 'upgrades'/>
      <Modal visible={isModalVisible} onRequestClose={()=>setModalVisible(false)}>
        <View style = {styles.main}>
          <View style={styles.textstyle}>
          <Text>{upPrice}</Text>
          <Text>{upPrice1}</Text>
          <Text>{upPrice2}</Text>
          </View>
        <View style ={styles.but}>
          
          <Button onPress={()=>{
            if (counter >= upPrice)
            {
              soct+=1
              setcounter(counter-upPrice)
              upPrice= Math.round(upPrice*1.3 , 1)
            }

            }}title={'Upgrade'}/>
          <Button onPress={()=>{
            if (counter >=upPrice1)
            {
              soct+=4
              setcounter(counter-upPrice1)
              upPrice1= Math.round(upPrice1*1.3 , 1)
            }
          }}title='Upgrade'/>
          <Button onPress={()=>{
            if (counter >= upPrice2)
            {
              soct+=5
              setcounter(counter-upPrice2)
              upPrice2= Math.round(upPrice2*1.3 , 1)
            }}}title='Upgrade'/>
        </View>
       
        <View style = {{padding: 60}}>
          <Button onPress={()=>setModalVisible(false)} title = 'close modal'/>
          </View>
          <Text>Счёт: {counter}</Text>
        

        </View>
         
         </Modal>
      <Button onPress={()=> {
        setcounter(0)
        soct = 1
      }}  title='obnulenie'/>
      </View>
      
      <Text>{soct}</Text>

    </View>
  );
  
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
 
    alignItems:'center',
    justifyContent:'center',
  },
  but:{
    width: 300,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',

    justifyContent:'space-around',
     

  },
  textstyle:{
    flexDirection:'row',
    width: 300,
    justifyContent:'space-around',

  },


})