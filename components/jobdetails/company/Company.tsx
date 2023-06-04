import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, placeholderImage } from "../../../constants";
import { checkImageURL } from "../../../utils";

interface ICompany {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
}

const Company = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}: ICompany) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo) ? companyLogo : placeholderImage,
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />

          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
