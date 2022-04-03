import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BarsDetailsScreen from "../screens/BarsDetailsScreen";
import BarsListScreen from "../screens/BarsListScreen";
import HeaderPrimary from "../components/HeaderPrimary";
import HeaderSecondary from "../components/HeaderSecondary";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createStackNavigator();

const BarsStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ListOfBars">
      <Stack.Screen
        name="ListOfBars"
        component={BarsListScreen}
        options={{
          header: HeaderPrimary,
        }}
      />
      <Stack.Screen
        name="BarsDetails"
        component={BarsDetailsScreen}
        options={{
          header: HeaderSecondary,
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
