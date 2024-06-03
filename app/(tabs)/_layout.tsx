import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Icons from "react-native-vector-icons/FontAwesome";
import IconsOct from '@expo/vector-icons/Octicons'

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '預報',
          tabBarIcon: ({ color, focused }) => (
            <Icons name="lemon-o" size={30} color="rgba(20, 34, 70, 1.0)" />
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="try"
        options={{
          title: '位置',
          tabBarIcon: ({ color, focused }) => (
            <IconsOct name="gear" size={30} color="rgba(20, 34, 70, 1.0)" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '設定',
          tabBarIcon: ({ color, focused }) => (
            <IconsOct name="gear" size={30} color="rgba(20, 34, 70, 1.0)" />
          ),
        }}
      />
    </Tabs>
  );
}
