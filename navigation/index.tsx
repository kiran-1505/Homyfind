import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';
import AddAdScreen from '../screens/AddAdScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); // use createNativeStackNavigator

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'search';

          if (route.name === 'Favorites') iconName = 'heart';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'MyAds') iconName = 'home'; // back to earlier icon

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1e90ff',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="MyAds" component={MyAdsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="AddAd" component={AddAdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
