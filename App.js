import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigation from './android/app/src/navigations/Stack';
import TimeLimitOFF from './android/app/src/tabata/TimeLimitOFF';
import TimeLimitON from './android/app/src/tabata/TimeLimitON';
import 'react-native-gesture-handler';
import Body from './android/app/src/compponents/Body';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TimeLimitOFF" component={TimeLimitOFF} options={{ headerShown: false }} />
        <Stack.Screen name="TimeLimitON" component={TimeLimitON} options={{ headerShown: false }} />
        <Stack.Screen name="Body" component={Body} options={{ headerShown: false }} />
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