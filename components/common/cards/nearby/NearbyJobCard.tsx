import React from "react";
import { View, Text } from "react-native";

import styles from "./nearbyjobcard.style";
import { IItem } from "../../../../types";

interface INearbyJobCard {
  job: IItem;
  handleNavigate: VoidFunction;
}

const NearbyJobCard = ({ job, handleNavigate }: INearbyJobCard) => {
  return (
    <View>
      <Text>NearbyJobCard</Text>
    </View>
  );
};

export default NearbyJobCard;
