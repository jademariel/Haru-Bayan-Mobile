import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'; // Import Image component
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import MenuScreen from '../screens/MenuScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = require('../assets/buttons/home.png'); // Path to your PNG file
          } else if (route.name === 'Cart') {
            iconSource = require('../assets/buttons/cart.png'); // Path to your PNG file
          } else if (route.name === 'Menu') {
            iconSource = require('../assets/buttons/menu.png'); // Path to your PNG file
          } else if (route.name === 'User') {
            iconSource = require('../assets/buttons/user.png'); // Path to your PNG file
          }
          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }} // Adjust the size and tint color
            />
          );
        },
        tabBarActiveTintColor: '#8B0000', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
}
