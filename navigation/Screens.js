import React from 'react';
import { Block } from 'galio-framework';
import { Easing, Animated, Dimensions, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SocialIcon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Components from '../screens/Components';
import Articles from '../screens/Articles';
import Onboarding from '../screens/Onboarding';
import SettingsScreen from '../screens/Settings';
// drawer
import CustomDrawerContent from './Menu';
// header for screens
import { Header, Icon } from '../components';
import { nowTheme, tabs } from '../constants';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createBottomTabNavigator();

function ComponentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Components" mode="card" headerMode="screen">
      <Stack.Screen
        name="Components"
        component={Components}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Components" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Articles" mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          backgroundColor: '#FFFFFF',
        }}
      />
    </Stack.Navigator>
  );
}

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
      <Stack.Screen
        name="Account"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent title="Create Account" navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header transparent white title="Profile" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <ActionBarImage />,
          header: ({ navigation, scene }) => (
            <Header title="Dispatch" search options navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="" back white transparent navigation={navigation} scene={scene} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      screenOptions={() => ({
tabBarIcon: () => {
                  //  let iconName;
 
                  //  if (route.name === 'Home') {
                  //      iconName = focused ? 'home' : 'home-outline';
                  //  } else if (route.name === 'Bookmark') {
                  //      iconName = focused ? 'bookmark' : 'bookmark-outline';
                  //  } else if (route.name === 'Categories') {
                  //      iconName = focused ? 'apps' : 'apps-box';
                  //  } else if (route.name === 'Settings') {
                  //      iconName = focused ? 'settings' : 'settings-box';
                  //  }
                   return (
                       <MaterialCommunityIcons
                           name='rowing'
                           size={15}
                           color={'red'}
                       />
                   );
               },
      })}
      tabBarOptions={{
        
        activeTintColor: 'red',  // Color of tab when pressed
        inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        labelStyle: {
          fontSize: 11,
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Components" component={ComponentsStack} />
      <Drawer.Screen name="Articles" component={ArticlesStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      {/* <Drawer.Screen name="Account" component={AccountStack} /> */}
    </Drawer.Navigator>
  );
}
const ActionBarImage = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', zIndex: 9 }}>
      <Image
        source={{
          uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
