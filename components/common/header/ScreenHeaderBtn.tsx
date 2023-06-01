import React from "react";
import { View, Text } from "react-native";

import styles from "./screenheader.style";

interface IScreenHeaderBtn {
  iconUrl: string;
  dimension: string;
}

const ScreenHeaderBtn = ({ iconUrl, dimension }: IScreenHeaderBtn) => {
  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  );
};

export default ScreenHeaderBtn;
