import React from "react";
import { Image, Text, View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text as PaperText,
} from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Address,
  CardCover,
  IconRow,
  Info,
  RestaurantCard,
  Row,
  SectionEnd,
  Title,
} from "./restaurant-info.styles";

function RestaurantInfo({ restaurant = {} }) {
  const {
    name,
    icon,
    photos = [
      "https://humanwindow.com/wp-content/uploads/fasting-large-min.jpg",
    ],
    address,
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(
    new Array(Math.floor(rating))
  );
  return (
    <RestaurantCard elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Info>
        <PaperText variant='titleLarge'>
          <Title>{name}</Title>
        </PaperText>
        <IconRow>
          <Row>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Row>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position='left' size='large'>
              {isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
            </Spacer>
            <Spacer position='left' size='large'>
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: icon }}
              />
            </Spacer>
          </SectionEnd>
        </IconRow>
        <Address variant='bodyMedium'>{address}</Address>
      </Info>
      {/* <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions> */}
    </RestaurantCard>
  );
}

export default RestaurantInfo;
