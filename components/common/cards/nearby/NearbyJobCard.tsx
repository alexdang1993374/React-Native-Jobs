import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./nearbyjobcard.style";
import { IItem } from "../../../../types";

interface IPopularJobCard {
  job: IItem;
  handleNavigate: VoidFunction;
}

const NearbyJobCard = ({ job, handleNavigate }: IPopularJobCard) => {
  return (
    <TouchableOpacity
      // @ts-ignore
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity
        // @ts-ignore
        style={styles.logoContainer}
      >
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          // @ts-ignore
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          // @ts-ignore
          style={styles.jobName}
          numberOfLines={1}
        >
          {job.job_title}
        </Text>

        <Text style={styles.jobType}>{job.employer_name}</Text>

        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
