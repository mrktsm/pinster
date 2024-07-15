import { Tabs } from "expo-router";

export default function _layout() {
    return (
        <Tabs>
            <Tabs.Screen name="Home" options={{ headerShown: false }} />
            <Tabs.Screen name="Other"/>
        </Tabs>
    )
}