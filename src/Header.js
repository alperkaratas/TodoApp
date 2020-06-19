import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFCE00',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
    borderRadius: 15,
  },
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default Header;
