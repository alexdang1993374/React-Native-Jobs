import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./popularjobcard.style";
import { IItem } from "../../../../types";
import { placeholderImage } from "../../../../constants";

interface IPopularJobCard {
  item: IItem;
  selectedJob: string;
  handleCardPress: (item: IItem) => void;
}

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: IPopularJobCard) => {
  return (
    <TouchableOpacity
      // @ts-ignore
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        // @ts-ignore
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : placeholderImage,
          }}
          resizeMode="contain"
          // @ts-ignore
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          // @ts-ignore
          style={styles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>

        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
