/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoItem = this.props.todoItem;

    return (
      <TouchableOpacity
        style={styles.todoItem}
        onPress={() => this.props.toggleDone()}>
        <Text
          style={[
            todoItem.done
              ? {color: 'red', textDecorationLine: 'line-through'}
              : {color: '#313131'},
            {fontSize: 18, paddingLeft: 5, fontWeight: '500'},
          ]}>
          {todoItem.title}
        </Text>
        <TouchableOpacity onPress={() => this.props.removeTodo()}>
          <Image
            style={{width: 22, height: 22}}
            source={require('./assets/trash.png')}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: Dimensions.get('window').width / 1.1,
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 20,
  },
});
