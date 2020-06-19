import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={todoInput => props.textChange(todoInput)}
        value={props.todoInput}
        placeholder="Yeni bir görev giriniz..."
      />
      <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo}>
        <Text style={styles.addButtonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 3},
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    margin: 15,
  },
  input: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    fontSize: 18,
    height: 45,
    paddingLeft: 15,
  },
  addButton: {
    width: 100,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Input;
