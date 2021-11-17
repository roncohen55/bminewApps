import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

export default function App() {

  const [height,setheight]=useState(0);
  const [weigth,setweigth]=useState(0);
  const [result,setresult]=useState(0);


  const calbmi = () => {

    const heightformat= height/100;
   let bmi=weigth / (heightformat*heightformat);
   bmi=bmi.toFixed(2);
    setresult(bmi);
  }

  return (
    <View style={styles.container}>
     
     <Text>plase add your height in cm </Text>
    <TextInput  style={styles.inputstyle} value={height} onChangeText={text => setheight(text)} />
     <Text>plase add your weigth</Text>
     <TextInput  style={styles.inputstyle} value={weigth} onChangeText={text => setweigth(text)}/>
     <Text>{result}</Text>
     <TouchableOpacity onPress={calbmi} style={styles.btn}  >calculate</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{backgroundColor:'#ffff',width:'20%',borderRadius:20,paddingVertical:20,marginTop:6,textAlign:'center'},
  inputstyle:{backgroundColor:'#ffff',width:'100%',borderRadius:20,paddingVertical:20,marginTop:6,textAlign:'center'},
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});
