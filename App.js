/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

//components
import Header from './components/Header';
import Button from './components/Button';

const stack = createStackNavigator({});

const styles = StyleSheet.create({
  appBar: {
    flex: 1,
  },
  Container: {
    height: '100%',
    paddingTop: '3%',
  },
  listView: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrool: {
    borderColor: '#000',

    borderRadius: 20,
    borderColor: 'black',
    height: '80%',
    width: '95%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2.5%',

    // paddingTop: '5%',
  },
});

function Home() {
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
          </ScrollView>
        </View>

        <View style={styles.Container}>
          <Button onPress={() => alert('yo hoo')}> </Button>
        </View>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home()} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App();
