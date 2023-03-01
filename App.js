import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import home from './screens/home';
import details from './screens/details';
import play from './screens/play';
import { Themes } from "./assets/Themes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} options={{headerShown: false}}/>
        <Stack.Screen name="Song Details" component={details} options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTitleStyle: {color:'white'}}}/>
        <Stack.Screen name="Song Preview" component={play} options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTitleStyle: {color:'white'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

