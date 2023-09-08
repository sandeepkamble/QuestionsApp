import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReactScreen from './src/screens/ReactScreen'; 
import ReactNative from './src/screens/ReactNativeScreen'; 
import NodeScreen from './src/screens/NodeScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarLabelPosition: "beside-icon",
    tabBarLabelStyle: {
      fontWeight: "700",
      fontSize: 15,
      
    },tabBarIconStyle: { display: "none" }, headerTitleAlign: 'center',}}>
        <Tab.Screen name="React Questions" component={ReactScreen} options={{ tabBarLabel: 'React' }}/>
        <Tab.Screen name="React Native Question" component={ReactNative} options={{ tabBarLabel: 'React Native' }}/>
        <Tab.Screen name='Node Questions' component={NodeScreen} options={{ tabBarLabel: 'Node' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
