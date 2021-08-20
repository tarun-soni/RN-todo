import React from 'react'
import { BackHandler, StyleSheet, Text, View } from 'react-native'

import ImageScreen from '../screens/ImageScreen'
import TodoFlatList from '../screens/TodoFlatList'

import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
/**
 * old navigation from tutorial
 */

// const MainStack = createStackNavigator()
// const MainStackScreen = () => {
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen
//         name="Imagescreen"
//         component={ImageScreen}
//         options={{ headerShown: false }}
//       />
//       <MainStack.Screen name="TodoScreen" component={TodoFlatList} />
//     </MainStack.Navigator>
//   )
// }

// export default Navigation = () => {
//   return (
//     <NavigationContainer>
//       <MainStackScreen />
//     </NavigationContainer>
//   )
// }

/**
 * new navigation from reactnavigation docs
 */
const MainStack = createNativeStackNavigator()
export default Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Imagescreen">
        <MainStack.Screen
          name="Imagescreen"
          component={ImageScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="TodoFlatList"
          component={TodoFlatList}
          options={{ title: 'Todos' }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
