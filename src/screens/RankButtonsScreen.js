import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function RankButtonsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/beerCross.png")} />
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate("Rankings")}
          buttonStyle={styles.buttonRank}
          title="RANK"
        />
        <AppButton
          onPress={() => navigation.navigate("Standings")}
          buttonStyle={styles.buttonStandings}
          title="STANDINGS"
        />
      </View>
      <LottieView
        loop
        autoPlay
        style={styles.animation}
        source={require("../assets/animations/beerPour.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    marginTop: 15,
    zIndex: 1,
  },
  buttonContainer: {
    marginTop: 100,
  },
  buttonRank: {
    backgroundColor: colors.primary,
    width: 350,
  },
  buttonStandings: {
    backgroundColor: colors.secondary,
    marginTop: 50,
    width: 350,
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 50,
  },
});

export default RankButtonsScreen;
