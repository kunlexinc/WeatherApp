import React from 'react'
import { View, StyleSheet, StatusBar, Text, FlatList,ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_txt: '2022-08-30 17:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: '2022-09-30 12:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'clear'
      }
    ]
  },
  {
    dt_txt: '2022-05-30 11:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [
      {
        main: 'fog'
      }
    ]
  }
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  console.log('working1')
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'black'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  console.log('working2')
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  return (
    <View style={styles.container}>
       <ImageBackground source={require('../../assets/upcoming-image.jpg')} style={styles.image}>
      <Text>Upcoming Weather</Text>
     
      <FlatList data={DATA} renderItem={renderItem}  keyExtractor={(item) => item.dt_txt}/>
      <Text>Upcoming Weather</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue"
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex:1
    
  }
})

export default UpcomingWeather
