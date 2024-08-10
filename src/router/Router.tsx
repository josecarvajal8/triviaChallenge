import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './Router.interface';
import {Challenge, Home} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerBackVisible: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Challenge"
          component={Challenge}
          options={{
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
