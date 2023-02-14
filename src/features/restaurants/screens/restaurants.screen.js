import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import {
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";
import Search from "../components/search.component";

const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
`;

function RestaurantsScreen({ navigation }) {
  const { isLoading, error, restaurants } = useContext(
    RestaurantsContext
  );

  return (
    <Container>
      {isLoading && (
        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={isLoading}
            color={MD2Colors.red200}
          />
        </View>
      )}
      <Search />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }>
            <RestaurantInfo restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
}

export default RestaurantsScreen;
