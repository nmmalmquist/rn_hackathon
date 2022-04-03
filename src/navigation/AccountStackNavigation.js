import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderPrimary from "../components/HeaderPrimary";
import HeaderSecondary from "../components/HeaderSecondary";
import AccountScreen from "../screens/AccountScreen";
import NewPostScreen from "../screens/NewPostScreen";


const Stack = createStackNavigator();

const BarsStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          header: HeaderPrimary,
        }}
      />
      <Stack.Screen
        name="newPost"
        component={NewPostScreen}
        options={{
          header: HeaderSecondary,
        }}
      />
    </Stack.Navigator>
  );
};

export default BarsStackNavigation;
