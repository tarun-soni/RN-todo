import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  title: {
    color: colors.text,
    fontSize: 24,
  },
  icons_container: {
    height: 50,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    padding: 10,
  },
  strike: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
})
export const TodoItem = ({
  title,
  onPress,
  onDeletePress,
  index,
  doneStatus,
  onDonePress,
}) => {
  return (
    <View onPress={onPress} style={styles.row}>
      <Text style={[styles.title, doneStatus ? styles.strike : '']}>
        {title}
      </Text>

      <View style={styles.icons_container}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="delete-outline"
            size={32}
            color="black"
            onPress={onDeletePress}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDonePress}>
          <MaterialIcons name="done" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
