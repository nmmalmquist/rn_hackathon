import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import DrunkButton from "./DrunkButton";

import { Entypo } from "@expo/vector-icons";

function HeaderSecondary({ navigation, title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
        <Entypo name="chevron-left" size={30} color="white" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Image
          style={styles.image}
          source={require("../assets/beerLogo.png")}
        />
        <AppText style={styles.text}>Bar Fly</AppText>
      </View>
      <TouchableOpacity onPress={() => console.log("Go to new post")}>
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
  backText: {
    color: "white",
    fontSize: 20,
    marginTop: 3,
  },
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
    marginLeft: 40,
  },
  backBtn: {
    marginBottom: 20,
    marginLeft: 5,
    flexDirection: "row",
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

export default HeaderSecondary;
