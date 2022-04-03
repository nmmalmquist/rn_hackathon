import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

function SafeScreen(props) {
  return <View style={[styles.screen, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default SafeScreen;
