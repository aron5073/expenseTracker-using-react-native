import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';

const screens = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '8%',
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: 'lightgrey',
    borderColor: '#000',
    borderRadius: 30,
  },
  text: {
    fontStyle: 'normal',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}> + Add Transcations </Text>
    </TouchableOpacity>
  );
};
