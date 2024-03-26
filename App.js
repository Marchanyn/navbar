import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen =({navigation}) => {
  return (
    <View style={styles.main}>
      <Text >Home screen</Text>
      <Button
        title="Go to FPage"
        onPress={() => navigation.navigate('FPage')}
      />
      <Button 
        
        title="Go to SPage"
        onPress={() => navigation.navigate('SPage')}
      />
      <Button 
        
        title="Go to TPage"
        onPress={() => navigation.navigate('TPage')}
      />
      <Button 
        
        title="Go to THPage"
        onPress={() => navigation.navigate('THPage')}
      />
    </View>
  );
}
const FPage = ({navigation})=>{
  return(
    <View style={styles.main}>
      <Text>FPage</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
const SPage = ({navigation})=>{
  return(
    <View style={styles.main}>
        <Text>SPage</Text>
        <Button
        title= "to home"
          onPress={()=> navigation.navigate('Home')}
          />
          
        
    </View>
  )
}
const TPage = ({navigation})=>{
  return(
    <View style={styles.main}>
        <Text>TPage</Text>
        <Button
        title= "to home"
          onPress={()=> navigation.navigate('Home')}
          />
          
        
    </View>
  )
}
const THPage = ({navigation})=>{
  return(
    <View style={styles.main}>
        <Text>THPage</Text>
        <Button
        title= "to home"
          onPress={()=> navigation.navigate('Home')}
          />
          
        
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FPage" component={FPage} />
        <Stack.Screen name="SPage" component={SPage}/>
        <Stack.Screen name="TPage" component={TPage}/>
        <Stack.Screen name="THPage" component={THPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    alignItems: 'center',
    justifyContent:'center'
    
  }
})

export default App