import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

const StackLayout = () => {
    return (
        <SafeAreaProvider >
            <Stack> 
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    )
}

export default StackLayout;
