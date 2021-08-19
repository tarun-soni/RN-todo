import React, { Fragment, useCallback, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'

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
  },

  scrollView: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

export default TodoScreen = () => {
  const [todos, setTodos] = useState(DATA)
  const [inputValue, setInputValue] = useState('test')

  const [refreshing, setRefreshing] = useState(false)
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

  const wait = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout))

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    wait(1000).then(() => setRefreshing(false))
  }, [])

  return (
    <SafeAreaView style={styles.todo_wrapper}>
      <Text style={styles.header_title}>List Of Todos</Text>

      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {todos.map((todo, index) => (
          <Fragment key={index}>
            <TodoItem
              title={todo.title}
              onDeletePress={() => onDeletePress(todo.id)}
              index={index}
            />
            <RowSeparator />
          </Fragment>
        ))}
      </ScrollView>

      <TodoInput
        onAddPress={onAddPress}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </SafeAreaView>
  )
}

export const RowSeparator = () => <View style={styles.separator} />
