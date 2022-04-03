import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function SearchBar({
  placeholder,
  onChangeText,
  width = "100%",
  value,
  ...otheProps
}) {
  return (
    <View style={[styles.container, { width: width }]}>
      <Ionicons
        style={styles.icon}
        name="search-sharp"
        size={20}
        color={colors.medium}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={value}
        {...otheProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    height: 30,
  },
  icon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SearchBar;
