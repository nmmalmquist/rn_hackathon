import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LogoutDrawerItem from "../components/LogoutDrawerItem";
import AppNavigation from "./AppNavigation";


//NO CLUE WHY THIS DOES NOT WORK
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={LogoutDrawerItem} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
