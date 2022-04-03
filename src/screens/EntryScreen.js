import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";

function EntryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/beerLogo.png")} style={styles.logo} />
        <AppText style={styles.title}>Bar Fly!</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Log in" buttonStyle={styles.buttonLogin} onPress={() => navigation.navigate("Login")}/>
        <AppButton title="Create Account" buttonStyle={styles.buttonCreate} onPress={() => navigation.navigate("CreateAccount")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
      marginBottom: "25%",
      width: "90%",
  },
  buttonLogin: {
      backgroundColor: colors.secondary,
      marginVertical: 15
  },
  buttonCreate: {
      backgroundColor: colors.secondaryLight,
      marginVertical: 15
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: 150,
  },
  logo: {
    height: 220,
    width: 300,
  },
  title: {
    color: "white",
    fontSize: 45,
    margin: 30,
  },
});

export default EntryScreen;
