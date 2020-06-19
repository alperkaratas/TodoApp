import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Button = props => {
  return (
    <View style={styles.butonContainer}>
      <TouchableOpacity onPress={props.myPress}>
        <Text style={styles.textStyle}>{props.myTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  butonContainer: {
    backgroundColor: '#f1404b',
    borderRadius: 25,
    height: Dimensions.get('window').width / 8,
    width: Dimensions.get('window').width / 1.8,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 30,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
