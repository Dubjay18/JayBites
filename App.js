import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return (
      <View>
        <Text>Nothing</Text>
      </View>
    );
  }
  const Map = () => <Text>map</Text>;
  const Settings = () => <Text>settings</Text>;
  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}>
            <Tab.Screen
              name='Restaurants'
              component={RestaurantsScreen}
            />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen
              name='Settings'
              component={Settings}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
