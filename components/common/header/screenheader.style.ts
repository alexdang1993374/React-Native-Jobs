import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { COLORS, SIZES } from "../../../constants";

type TBtnImg = ViewStyle | TextStyle | ImageStyle;

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  // @ts-ignore
  btnImg: (dimension: string) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
