import React from'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import exercise from "../assets/image/exercise.png";
import home from "../assets/image/home.png";
import calendar from "../assets/image/calendar.png";
import writing from "../assets/image/writing.png";
import TimeLimitOFF from '../tabata/TimeLimitOFF';

const Home = () => <Text>Home Screen</Text>;
const Calendar = () => <Text>Calendar Screen</Text>;
const Writing = () => <Text>Writing Screen</Text>;


const Tab = createBottomTabNavigator();

const Exercise = () => {
  const navigation = useNavigation();

  const navigateToTimeLimitOff = () => {
    // TimeLimitOFF 페이지로 이동
    navigation.navigate('TimeLimitOFF');
  };

  return (
    <TouchableOpacity onPress={navigateToTimeLimitOff}>
      <Image source={exercise} style={{ width: 35, height: 35 }} />
    </TouchableOpacity>
  );
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
        component={Exercise}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={calendar}
              style={{  width: 30, height: 30,  tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={home}
              style={{  width: 30, height: 30,  tintColor: focused ? '#1A6DFF' : 'gray' }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Writing"
        component={Writing}
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

export default TabNavigation;