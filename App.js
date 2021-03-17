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
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//components
import Header from './components/Header';
import Button from './components/Button';
// import addTranscation from './components/addTranscations';

// //navigation
// const Navigator = createStackNavigator({
//   addTranscation: {screen: addTranscation},
// });

const styles = StyleSheet.create({
  appBar: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
    alignItems: 'center',
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
