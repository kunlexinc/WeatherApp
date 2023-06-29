import React from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'

const DATA = [
  {
    title: 'Firt Item'
  },
  {
    title: 'Second Item'
  },
  {
    title: 'Third Item'
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const TestingFlatlist = () => {
  const renderItem = ({ item }) => <Item title={item.title} />
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //marginTop: StatusBar.currentHeight || 0
  }
  //   item: {
  //     backgroundColor: '#f9c2ff',
  //     padding: 20,
  //     marginVertical: 8,
  //     marginHorizontal: 16
  //   },
  //   title: {
  //     fontSize: 32
  //   }
})

export default TestingFlatlist
