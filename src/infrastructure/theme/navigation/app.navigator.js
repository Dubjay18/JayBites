import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import RestaurantsScreen from "../../../features/restaurants/screens/restaurants.screen";
import RestaurantsNavigator from "./restaurants.navigator";
import { Text } from "react-native";
import MapScreen from "../../../features/map/screens/map.screen";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Settings = () => <Text>settings</Text>;
const Tab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen
          name='Restaurants'
          component={RestaurantsNavigator}
        />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
