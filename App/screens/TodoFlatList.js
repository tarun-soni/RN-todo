import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'

import colors from '../constants/colors'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { DATA } from '../data/TODO_DATA'
import { generateRandomID } from '../utils/generateID'

const styles = StyleSheet.create({
  todo_wrapper: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    flex: 1
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

const TodoFlatList = () => {
  const [todos, setTodos] = useState(DATA)
  const [inputValue, setInputValue] = useState('test')

  const onAddPress = () => {
    setTodos((todos) => [
      ...todos,
      { id: generateRandomID(), title: inputValue }
    ])
  }

  const onDeletePress = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id)
    setTodos(filteredTodos)
  }

  const renderItem = ({ item }) => (
    <View>
      <TodoItem
        title={item.title}
        onDeletePress={() => onDeletePress(item.id)}
      />
      <RowSeparator />
    </View>
  )

  return (
    <SafeAreaView style={styles.todo_wrapper}>
      <Text style={styles.header_title}>Flatlist todos </Text>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TodoInput
        onAddPress={onAddPress}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </SafeAreaView>
  )
}

export default TodoFlatList

export const RowSeparator = () => <View style={styles.separator} />
