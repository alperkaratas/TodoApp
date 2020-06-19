/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Header from './Header';
import Input from './components/Input';
import TodoItem from './TodoItem';

export default class todoMain extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Kodluyoruz Todo App yap.', done: false},
        {id: 1, title: 'Kodluyoruz Restorant App yap.', done: false},
      ],
    };
  }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false,
    });

    this.setState({
      todos: todos,
      todoInput: '',
    });
  }

  toggleDone(item) {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    this.setState({todos});
  }

  removeTodo(item) {
    let todos = this.state.todos;

    todos = todos.filter(todo => todo.id !== item.id);

    this.setState({todos});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Todo App" />

        <Input
          addNewTodo={() => this.addNewTodo()}
          textChange={todoInput => this.setState({todoInput})}
          todoInput={this.state.todoInput}
        />

        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>@alperkaratas</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
