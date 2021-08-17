import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView
} from 'react-native'

import colors from '../constants/colors'
import { RowItem } from '../components/RowItem'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  todo_wrapper: {
    paddingVertical: 48,
    paddingHorizontal: 24
  },
  header_title: {
    paddingVertical: 8,
    fontSize: 36,
    fontWeight: 'bold'
  },
  title: {
    color: colors.text,
    fontSize: 32
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
})

export default () => {
  return (
    <SafeAreaView style={styles.todo_wrapper}>
      <Text style={styles.header_title}>List Of Todos</Text>
      <RowItem
        title="Task 1"
        rightIcon={
          <MaterialCommunityIcons
            name="delete-outline"
            size={32}
            color="black"
            onPress={() => alert('todo!')}
          />
        }
      />
      <RowSeparator />
    </SafeAreaView>
  )
}

export const RowSeparator = () => <View style={styles.separator} />
