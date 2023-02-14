import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;
function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search'
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          if (!text.length) {
            return;
          }
          setSearchQuery(text);
        }}
        value={searchQuery}
      />
    </SearchContainer>
  );
}

export default Search;
