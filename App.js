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
  Container: {
    height: '100%',
    paddingTop: '18%',
  },
  listView: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrool: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function App() {
  return (
    <View style={styles.appBar}>
      <Header title="Expense Tracker" />
      <View style={styles.listView}>
        <View style={styles.scrool}>
          <ScrollView>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
            <Text>yo hoo</Text>
          </ScrollView>
        </View>

        <View style={styles.Container}>
          <Button onPress={() => alert('yo hoo')}></Button>
        </View>
      </View>
    </View>
  );
}
