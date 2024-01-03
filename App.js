import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './android/app/src/navigations/Stack';
import TimeLimitOFF from './android/app/src/tabata/TimeLimitOFF';
import TimeLimitON from './android/app/src/tabata/TimeLimitON';
import 'react-native-gesture-handler';

import { StatusBar, TouchableOpacity, View, ScrollView, TextInput, Text, Animated, Image } from 'react-native';
import NonstopWatchPage from './android/app/src/tabata/NonstopWatch';
import StopWatchPage from './android/app/src/tabata/StopWatch';
import FlatList from './android/app/src/tabata/FlatList';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TimeLimitOFF" component={TimeLimitOFF} options={{ headerShown: false }} />
        <Stack.Screen name="TimeLimitON" component={TimeLimitON} options={{ headerShown: false }} />
        <Stack.Screen name="FlatList" component={FlatList} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;