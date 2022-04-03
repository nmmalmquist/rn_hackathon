import React, {useContext} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import AccountListItem from "../components/AccountListItem";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AuthContext from "../auth/context";


const data = [
  {id: "jkhu;wh;iowuh;o", post: "This is a nick post", from: "Nick"},
  {id: "jkhfou;whiowuh;o", post: "This is a nick post", from: "Nick"},
  {id: "jkhfou;wh;wuh;o", post: "This is a nick post", from: "Nick"},
];

function AccountScreen(props) {
  const {user} = useContext(AuthContext);
  
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <MaterialCommunityIcons style={styles.image} name={"account"} size={150} color={"grey"} />
          <AppText style={styles.name}>{user.name}</AppText>
        </View>
        <AppText style={styles.listTitle}>Your Activity</AppText>
        <FlatList
          style={styles.list}
          data={data}
          scrollEnabled={true}
          renderItem={({item}) => <AccountListItem key={item.id} thisPost={item} />}
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    borderRadius: 100,
    height: 130,
    width: 130,
  },
  imageContainer: {
    alignContent: "center",
    width: 250,
    marginTop: 50,
  },
  name: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 20
  },
  listTitle: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: "bold"
  },
  list: {
    marginTop: 30,
    width: "90%",
    height: "100%"
  },
});

export default AccountScreen;
