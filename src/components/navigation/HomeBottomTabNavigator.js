import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text} from 'react-native';
import HomeScreen from '../../screens/HomeScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#fff',
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={24} color={color} />
          ),
        }}
        name="Search"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'add'} size={44} color={color} />
          ),
          // to hide label
          tabBarLabel: () => null,
        }}
        name="Upload"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={24}
              color={color}
            />
          ),
        }}
        name="Inbox"
        component={() => <Text>Search </Text>}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'ios-person-outline'} size={24} color={color} />
          ),
        }}
        name="Profile"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}
