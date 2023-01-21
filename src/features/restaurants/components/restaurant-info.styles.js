import styled from "styled-components";
import { Image, Text, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text as PaperText,
} from "react-native-paper";
export const RestaurantCard = styled(Card)`
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) =>
    props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Address = styled(PaperText)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Info = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Row = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const IconRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const SectionEnd = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 55%;
  align-items: center;
`;
