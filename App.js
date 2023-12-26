import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './android/app/src/navigations/Stack';
import TimeLimitOFF from './android/app/src/tabata/TimeLimitOFF';

import { View} from 'react-native';
import TimeLimitON from './android/app/src/tabata/TimeLimitON';
import StopWatchPage from './android/app/src/tabata/StopWatch';
import NonstopWatchPage from './android/app/src/tabata/NonstopWatch';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TimeLimitOFF" component={TimeLimitOFF} />
        <Stack.Screen name="TimeLimitON" component={TimeLimitON} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <StackNavigation/>
//     // </NavigationContainer>
//     <View>
//       {/* <TimeLimitON/> */}
//  <TimeLimitOFF/>
//   {/* <StopWatchPage/> */}
//   {/* <NonstopWatchPage/> */}
//     </View>

//     );
// }; 

export default App;