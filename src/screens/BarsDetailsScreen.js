import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import DescriptionBio from "../components/DescriptionBio";
import colors from "../config/colors";

function BarsDetailsScreen({ route }) {
  const item = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{item.name}</AppText>
        </View>
        <View style={styles.socialMediaContainer}>
          <MaterialIcons
            style={styles.icon}
            name="facebook"
            size={40}
            color="navy"
          />
          <AntDesign
            style={styles.icon}
            name="twitter"
            size={40}
            color="skyblue"
          />
          <AntDesign
            style={styles.icon}
            name="instagram"
            size={40}
            color="purple"
          />
        </View>
        <View style={styles.descriptionBio}>
          <DescriptionBio
            title="The Vibe"
            bodyText="Here is where the admin will put an accurate description of the establishment (who it caters to and other things)"
            width={350}
          />
        </View>
        <AppText style={styles.title}>The Daily Reel</AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  descriptionBio: {
    alignSelf: "center",
    marginTop: 20,
  },

  icon: {
    marginHorizontal: 10,
  },
  image: {
    height: 250,
    width: "100%",
  },
  socialMediaContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 3,
    marginTop: 15,
    width: 380,
  },
});

export default BarsDetailsScreen;
