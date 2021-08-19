import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../constants/colors'

const styles = StyleSheet.create({
  input_container: {
    backgroundColor: colors.blue,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  add_todo_button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  button_text: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  todo_input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.white,
    marginLeft: 10,
  },
})

export const TodoInput = ({ onAddPress, inputValue, setInputValue }) => {
  return (
    <View style={styles.input_container}>
      <TextInput
        style={styles.todo_input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />

      <TouchableOpacity style={styles.add_todo_button} onPress={onAddPress}>
        <Text style={styles.button_text}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}
