import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";

function AppButton({ title, buttonStyle, textStyle, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <AppText style={[styles.text, textStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
  text: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
