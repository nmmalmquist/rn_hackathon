import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";

function BarsCard({
  imageHeight = 210,
  imageWidth = "100%",
  imageUri,
  title,
  cover,
  waitTime,
  onCardPress,
}) {
  const [starColor, setStarColor] = useState("white");

  const handleChangeColor = (color) => {
    starColor === "white" ? setStarColor(color) : setStarColor("white");
  };

  return (
    <TouchableWithoutFeedback onPress={onCardPress}>
      <View>
        <ImageBackground
          style={{ height: imageHeight, width: imageWidth }}
          imageStyle={styles.image}
          source={{ uri: imageUri }}
          blurRadius={0}
        >
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.waitTime}>
            Est. wait: {waitTime} minutes
          </AppText>
          <AppText style={styles.cover}>${cover}</AppText>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                handleChangeColor("yellow");
              }}
              style={styles.icon}
            >
              <Ionicons name="star" size={30} color={starColor} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cover: {
    color: colors.money,
    fontSize: 30,
    paddingLeft: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 20

  },
  icon: {
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 10,
  },
  image: {
    borderRadius: 10,
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    marginLeft: 10,
    marginTop: 5,
    shadowColor: "white",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 4 },
  },

  waitTime: {
    color: "white",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});

export default BarsCard;
