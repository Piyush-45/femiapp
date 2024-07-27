import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Tabs, useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import community from "../../assets/images/community.png";
import profile from "../../assets/images/profile.png";
import shoppingcart from "../../assets/images/shopingcart.png";

const TabsLayout = () => {
  const router = useRouter()
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'grey',
      headerTitleAlign: 'center',
      headerStyle: {
        // Adding shadow to the header
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
      },
      tabBarStyle: {
        height: 60,
        paddingBottom: 10,
      }
    }}>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerRight: () => (
            <TouchableOpacity onPress={()=>router.push('profile')}>
              <Image source={profile} style={{ marginRight: 15, width: 32, height: 32 }} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "black" : "grey"} />
          )
        }}
      />
      <Tabs.Screen
        name='shop'
        options={{
          title: 'Shop',
          headerRight: () => (
            <Image source={shoppingcart} style={{ marginRight: 15, width: 32, height: 32 }} />
          ),
          tabBarIcon: ({ focused }) => (
            <Entypo name="shop" size={24} color={focused ? "black" : "grey"} />
          )
        }}
      />
      <Tabs.Screen
        name='community'
        options={{
          title: 'Community',
          headerRight: () => (
            <Image source={community} style={{ marginRight: 15, width: 32, height: 32 }} />
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="users" size={24} color={focused ? "black" : "grey"} />
          )
        }}
      />
      <Tabs.Screen
        name='more'
        options={{
          title: 'My Femihub Essentials',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="view-grid-plus-outline" size={24} color={focused ? "black" : "grey"} />
          )
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;

const styles = StyleSheet.create({});
