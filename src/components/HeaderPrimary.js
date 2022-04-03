import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import DrunkButton from "./DrunkButton";

function HeaderPrimary({title, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.drunkBtn}>
        <DrunkButton onPress={() => console.log("i am drunkkk")} />
      </View>
      <View style={styles.detailsContainer}>
        <Image
          style={styles.image}
          source={require("../assets/beerLogo.png")}
        />
        <AppText style={styles.text}>Bar Fly!</AppText>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("newPost")}>
        <Ionicons
          style={styles.rightIcon}
          name="add"
          size={40}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    backgroundColor: colors.primary,
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    width: "100%",
  },
  detailsContainer: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 15,
    marginLeft: 10,
  },
  drunkBtn: {
    marginBottom: 20,
    marginLeft: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  rightIcon: {
    alignSelf: "flex-end",
    marginBottom: 13,
    marginRight: 5,
  },
  text: {
    color: "white",
    fontSize: 30,
    marginLeft: 10,
  },
});

export default HeaderPrimary;
