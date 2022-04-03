import React from "react";
import { View, StyleSheet, Text } from "react-native";

function RankingsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This screen will have moveable tabs to rank bars</Text>
      <Text>1.Galletes</Text>
      <Text>2.Rounders</Text>
      <Text>3.Bar1</Text>
      <Text>4.Bar2</Text>
      <Text>5.Galletes</Text>
      <Text>6.Galletes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RankingsScreen;
