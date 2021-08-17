import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  title: {
    color: colors.text,
    fontSize: 24
  }
})
export const TodoItem = ({ title, onPress, onDeletePress, index }) => {
  return (
    <View onPress={onPress} style={styles.row}>
      <Text style={styles.title}>{title}</Text>

      <MaterialCommunityIcons
        name="delete-outline"
        size={32}
        color="black"
        onPress={() => onDeletePress(index)}
      />
    </View>
  )
}
