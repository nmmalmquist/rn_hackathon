import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import colors from "../config/colors";

function AppTextInput({ IconComponent, ...otherTextInputProps }) {
  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>{IconComponent}</View>
          <TextInput style={styles.textInput} {...otherTextInputProps} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 0.3,
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    marginLeft: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default AppTextInput;
