import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

import styles from "./screenheader.style";

interface IScreenHeaderBtn {
  iconUrl: ImageSourcePropType;
  dimension: string;
  handlePress: VoidFunction;
}

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: IScreenHeaderBtn) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        // @ts-ignore
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
