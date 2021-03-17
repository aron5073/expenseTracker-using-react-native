/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './components/Header';
import Button from './components/Button';

const styles = StyleSheet.create({
  appBar: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
});
export default function App() {
  return (
    <View style={styles.appBar}>
      <Header title="Expense Tracker" />
      <View style={styles.buttonContainer}>
        <Button
          text="AC"
          size="lightgrey"
          onPress={() => alert('yo hoo')}></Button>
      </View>
    </View>
  );
}
