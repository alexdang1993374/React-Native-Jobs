import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

interface IPopularJobCard {
  item: any;
}

const PopularJobCard = ({ item }: IPopularJobCard) => {
  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  );
};

export default PopularJobCard;
