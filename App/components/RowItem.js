import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 36,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white
  }
})
export const RowItem = ({ title, onPress, rightIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}
