import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CitiesScreen, MainScreen} from '../screens';
import {INavBar} from '../entities';
import {NavBar} from '../layout';

export const screenNamesList = ['main', 'cities'] as const;

type ScreenNames = (typeof screenNamesList)[number];

const screensList: Record<
  ScreenNames,
  {
    screen: ({navigation}: any) => JSX.Element;
    navSettings: Omit<INavBar, 'navigation'>;
  }
> = {
  main: {
    screen: MainScreen,
    navSettings: {titleKey: 'main'},
  },
  cities: {
    screen: CitiesScreen,
    navSettings: {titleKey: 'cities', arrowBack: true},
  },
};

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="main">
        {Object.entries(screensList).map(item => (
          <Stack.Screen
            key={item[0]}
            name={item[0]}
            component={item[1].screen}
            options={{
              header: (props: any) => (
                <NavBar {...item[1].navSettings} {...props} />
              ),
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
