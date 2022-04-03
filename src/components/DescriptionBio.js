import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function DescriptionBio({ title, bodyText, textStyle, width = "100%'" }) {
  return (
    <View style={[styles.mainContainer, { width: width }]}>
      <AppText style={styles.titleStyle}>{title}</AppText>
      <View style={styles.bodyContainer}>
        <AppText style={styles.textStyle}>{bodyText}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    borderWidth: 3,
    borderColor: colors.secondary,
    marginTop: 10,
    width: "100%",
  },
  mainContainer: {
    alignItems: "center",
  },
  textStyle: {
    paddingHorizontal: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  titleStyle: {
    fontSize: 30,
    padding: 10,
  },
});

export default DescriptionBio;
