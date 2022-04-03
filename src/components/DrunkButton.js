import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import { getUser } from "../auth/storage";
import useAuth from "../auth/useAuth";

function DrunkButton({ onPress }) {
  const { logout } = useAuth();

  const handlePress = async () => {
    //just a button to be able to temporarily logout with.
    await logout();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <AppText style={styles.text}>Logout</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.danger,
    borderRadius: 20,
    height: 25,
    justifyContent: "center",
    width: 100,
  },
  text: {
    color: "white",
  },
});

export default DrunkButton;
