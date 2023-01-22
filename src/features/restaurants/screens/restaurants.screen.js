import React, { useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";
import {
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";

const isAndroid = Platform.OS === "android";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const SearchContainer = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) =>
    props.theme.colors.bg.secondary};
`;

function RestaurantsScreen() {
  const { isLoading, error, restaurants } = useContext(
    RestaurantsContext
  );

  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
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
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>

      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantInfo restaurant={item} />
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </Container>
  );
}

export default RestaurantsScreen;
