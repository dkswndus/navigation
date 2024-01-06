import React from'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar,Home,User,Exercise, Writing } from './Tab.Screens';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';


import exercise from "../assets/image/exercise.png";
import home from "../assets/image/home.png";
import calendar from "../assets/image/calendar.png";
import writing from "../assets/image/writing.png";


const Tab = createBottomTabNavigator();

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