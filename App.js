// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//components

import Buttons from './components/Button';

const screens = Dimensions.get('window');

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  buttonContainer: {
    height: '100%',
    paddingTop: '3%',
  },
  listView: {
    height: screens.height,
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
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '2.5%',

    // paddingTop: '5%',
  },
  topbar: {
    width: '100%',
    height: '8%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    margin: 15,
  },
  inputheading: {
    margin: 15,
  },
  formbuttonwrap: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  formbutton: {
    borderColor: '#000',
    width: screens.width / 2 - 50,
    height: '15%',
    borderRadius: 35,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formbuttontext: {
    color: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function handle() {
  alert('yo ho');
}
function HomeScreen({navigation}) {
  return (
    <View style={styles.bodyContainer}>
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

        <View style={styles.buttonContainer}>
          <Buttons onPress={() => navigation.navigate('Add Transcations')} />
        </View>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.listView}>
      <View style={styles.scrool}>
        <Text style={styles.inputheading}>Amount</Text>
        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={styles.inputheading}>Description </Text>

        <TextInput placeholder="Description" style={styles.input} />
        <View style={styles.formbuttonwrap}>
          <TouchableOpacity style={styles.formbutton} onPress={() => handle()}>
            <Text style={styles.formbuttontext}> Save </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.formbutton}>
            <Text style={styles.formbuttontext}> Clear </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            fontStyle: 'italic',
            fontWeight: 'bold',
          },
          headerTitleAlign: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Stack.Screen name="Expense Tracker" component={HomeScreen} />
        <Stack.Screen name="Add Transcations" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
