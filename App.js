import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/mock/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import Navigation from "./src/infrastructure/theme/navigation";
import { Ionicons } from "@expo/vector-icons";
import { isLoaded } from "expo-font";

const isAndroid = Platform.OS === "android";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  async function loadResourcesAsync() {
    await Promise.all([
      Ionicons.loadFont(),
      // Load other assets or fonts here if needed
    ]);
  }
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  // useEffect(() => {
  //   loadResourcesAsync();
  //   setLoaded(true);
  // }, [loaded]);
  if (!oswaldLoaded || !latoLoaded || !isLoaded) {
    return (
      <View>
        <Text>Nothing</Text>
      </View>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
