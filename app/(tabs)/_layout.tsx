import { Stack, Tabs } from "expo-router";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#161F3D',
                tabBarInactiveTintColor: '#B8BBC4',
                tabBarShowLabel: false
            }}
        >
            <Tabs.Screen
                name="MapScreen"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons name="map" size={24} color={color}></Ionicons>
                }}
                />
            <Tabs.Screen
                name="Messages"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="chatbox" size={24} color={color}></Ionicons>
                }}
                />
            <Tabs.Screen 
                name="Post"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={48} color={'#E9446A'}
                        style={{
                            shadowColor: "#E9446A",
                            shadowOffset: { width: 0, height: 0},
                            shadowRadius: 10,
                            shadowOpacity: 0.3
                    }}/>
                }}
            />
            <Tabs.Screen
                name="Notifications"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="notifications" size={24} color={color}></Ionicons>
                }}
                />   
            <Tabs.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" size={24} color={color}></Ionicons>
                }}
                />
        </Tabs>
    );
}