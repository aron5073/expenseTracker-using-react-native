import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const screens = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '6%',
    marginLeft: '30%',
    marginRight: '30%',
    backgroundColor: 'lightgrey',
    borderColor: '#000',
    borderRadius: 20,
    // marginTop: screens.height - 200,
  },
});

export default () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Add Transcations</Text>
    </TouchableOpacity>
  );
};
