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
  StatusBar,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ProfileList } from './components/profileList';
import { Provider } from 'react-redux';
import store from "./redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.lighter,
  };

  return (
    <Provider store={store}>

      <SafeAreaView style={backgroundStyle} >
        <StatusBar barStyle={'light-content'} />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileList} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
