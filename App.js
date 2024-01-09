import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Text } from 'react-native';
import exercise from './android/app/src/assets/image/exercise.png';
import home from './android/app/src/assets/image/home.png';
import calendar from './android/app/src/assets/image/calendar.png';
import writing from './android/app/src/assets/image/writing.png';

import TimeLimitOFF from './android/app/src/tabata/TimeLimitOFF';
import TimeLimitON from './android/app/src/tabata/TimeLimitON';
import FlatList from './android/app/src/tabata/FlatList';
import CircularTimer from './android/app/src/tabata/CircularTimer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExerciseScreen = ({ route }) => {
  return <TimeLimitOFF route={route} />;
};

const CalendarScreen = () => {
  return <Text>Calendar Screen</Text>;
};

const HomeScreen = () => {
  return <Text>Home Screen</Text>;
};

const WritingScreen = () => {
  return <Text>Writing Screen</Text>;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { height: 70 },
        labelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={exercise}
              style={{ width: 35, height: 35, tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={calendar}
              style={{ width: 30, height: 30, tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={home}
              style={{ width: 30, height: 30, tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
      
      <Tab.Screen
        name="Writing"
        component={WritingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={writing}
              style={{ width: 30, height: 30, tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="TimeLimitOFF" component={TimeLimitOFF} options={{ headerShown: false }} />
        <Stack.Screen name="TimeLimitON" component={TimeLimitON} options={{ headerShown: false }} />
        <Stack.Screen name="FlatList" component={FlatList} options={{ headerShown: false }} />
        <Stack.Screen name="CircularTimer" component={CircularTimer} options={{ headerShown: true }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
