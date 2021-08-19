import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'

import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { DATA } from '../data/TODO_DATA'
import { generateRandomID } from '../utils/generateID'
import NoTodos from '../components/NoTodos'
import colors from '../constants/colors'
const styles = StyleSheet.create({
  todo_wrapper: {
    paddingTop: 48,
    paddingHorizontal: 24,
    flex: 1,
  },
  header_title: {
    paddingVertical: 8,
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    color: colors.text,
    fontSize: 32,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
})

const TodoFlatList = () => {
  const [todos, setTodos] = useState(DATA)
  const [inputValue, setInputValue] = useState('test')

  const onAddPress = () => {
    setTodos((todos) => [
      ...todos,
      { id: generateRandomID(), title: inputValue },
    ])
  }

  const onDeletePress = (id) => {
    const filteredTodos = todos.filter((t) => t.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <SafeAreaView style={styles.todo_wrapper}>
      <Text style={styles.header_title}>Flatlist todos </Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            title={item.title}
            onDeletePress={() => onDeletePress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<NoTodos />}
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
