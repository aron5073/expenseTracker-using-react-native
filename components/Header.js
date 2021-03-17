import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '8%',
    //paddingTop: 36,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}
