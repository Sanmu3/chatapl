import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Dawer from './Drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const drawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Dawer />}>
      <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
