// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import HomeScreen from './screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
      <Stack.Screen name="Details" component={HomeScreen} options={{ title: 'Details Page' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details Page' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => <Icon name="rowing" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => <Icon name="rowing" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
