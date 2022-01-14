import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Dashboard} from '../screens/Dashboard';
import {Start} from '../screens/Start';
import {Questions} from '../screens/Questions';
import {Results} from '../screens/Results';

const {Navigator, Screen} = createNativeStackNavigator();

export type NavigationProps = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Dashboard">
        <Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Screen name="Start" component={Start} options={{headerShown: false}} />
        <Screen
          name="Questions"
          component={Questions}
          options={{headerShown: false}}
        />
        <Screen
          name="Results"
          component={Results}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
