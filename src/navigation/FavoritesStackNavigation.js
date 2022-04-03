import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderPrimary from "../components/HeaderPrimary";
import HeaderSecondary from "../components/HeaderSecondary";
import RankButtonsScreen from "../screens/RankButtonsScreen";
import RankingsScreen from "../screens/RankingsScreen";
import StandingsScreen from "../screens/StandingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createStackNavigator();

const FavoritesStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Fav">
      <Stack.Screen
        name="Fav"
        component={FavoritesScreen}
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

export default FavoritesStackNavigation;
