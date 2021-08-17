import React, { Fragment, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import colors from '../constants/colors'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'

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

export default TodoScreen = () => {
  const [todos, setTodos] = useState([
    {
      title: 'Task One'
    },
    {
      title: 'Task Two'
    },
    {
      title: 'Task Three'
    }
  ])
  const [inputValue, setInputValue] = useState('test')

  const onAddPress = () => {
    setTodos((todos) => [...todos, { title: inputValue }])
  }

  const onDeletePress = (index) => {
    let _todos = [...todos]
    _todos.splice(index, 1)
    setTodos(_todos)
  }

  return (
    <SafeAreaView style={styles.todo_wrapper}>
      <Text style={styles.header_title}>List Of Todos</Text>

      <ScrollView>
        {todos.map((todo, index) => (
          <Fragment key={index}>
            <TodoItem
              title={todo.title}
              onDeletePress={onDeletePress}
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
