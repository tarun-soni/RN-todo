import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const screen = Dimensions.get('window')
import colors from '../constants/colors'
const styles = StyleSheet.create({
  container: {
    marginVertical: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
  },
})
const NoTodos = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="done-all" size={72} color="black" />
      <Text style={styles.text}>Completed All Tasks</Text>
    </View>
  )
}

export default NoTodos
