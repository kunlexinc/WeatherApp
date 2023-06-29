//import { StatusBar } from 'expo-status-bar'
import React from 'react'
import CurrentWeather from './src/components/CurrentWeather'
import UpcomingWeather from './src/components/UpcomingWeather'
import TestingFlatlist from './src/components/TestingFlatlist'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
