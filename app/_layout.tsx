import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import "./globals.css";
import GlobalProvider from "@/lib/global-provider";

export default function AppLayout() {
    const [fontsLoaded] = useFonts({
        "Rubik-Bold": require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
        SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <GlobalProvider>
            <Stack 
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="product/[id]"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
        </GlobalProvider>
    );
}