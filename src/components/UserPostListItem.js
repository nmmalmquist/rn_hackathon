import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

function UserPostListItem({ thisPost, onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}><Text style={{fontWeight: "bold"}} >POST: </Text>{thisPost.post}</Text>
        <Text style={styles.text}><Text style={{fontWeight: "bold"}} >FROM: </Text>{thisPost.from}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    height: 60,
    borderColor: "black",
    borderWidth: 1
  },
  text: {
    marginLeft: 20
  }
});

export default UserPostListItem;
