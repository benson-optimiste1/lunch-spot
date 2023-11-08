import { View } from "react-native";
import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function RootLayout() {

    return  (
        <GluestackUIProvider config={config}>
              <Stack screenOptions={{ header: () => null }} />  
        </GluestackUIProvider>
    )
}