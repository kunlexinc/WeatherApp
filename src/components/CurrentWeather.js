//import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons';

function CurrentWeather() {
  return (
    <View style={styles.Wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>

      <View style={styles.hiLowWrapper}>
        <Text style={styles.hiLow}>High: 8</Text>
        <Text style={styles.hiLow}>Low:6</Text>
      </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt Weather</Text>
      </View>
    </View>
  )
}

export default CurrentWeather

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center',
    alignItems: 'center'
  },
 
  Wrapper: {
    flex: 1,
    
    backgroundColor: 'pink'
    
  },
  temp: { color: 'black', fontSize: 48 },
  feels: { color: 'black', fontSize: 30 },
  hiLow: {
    color: 'black',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
    
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})
