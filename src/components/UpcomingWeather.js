import React from 'react'
import { View, StyleSheet, StatusBar, Text } from 'react-native'

const UpcomingWeather = () => {
  return (
    <View style={styles.container}>
      <Text>Upcoming Weather</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
