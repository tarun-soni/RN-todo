import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({})
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const MainStack = createStackNavigator()
import ImageScreen from '../screens/ImageScreen'
import TodoFlatList from '../screens/TodoFlatList'
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Imagescreen"
        component={ImageScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="TodoScreen" component={TodoFlatList} />
    </MainStack.Navigator>
  )
}

export default Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  )
}
