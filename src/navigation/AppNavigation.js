import React, {useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import BarsStackNavigator from "./BarsStackNavigation";

import AccountStackNavigation from "../navigation/AccountStackNavigation";
import FavoritesScreen from "../screens/FavoritesScreen";
import FavoritesStackNavigation from "./FavoritesStackNavigation";
import PublicStackNavigation from "./PublicStackNavigation";
import BarContext from "../components/BarContext";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const data = [
    {id: "verv", name: "Galletes",bio: "this is the bio", cover: 3, city: "Bowling Green", state: "KY", zipCode: "42103", street: "524 RIVERGREEN LANE", phoneNumber: "270-779-1464", waitTime: 3.3},
    {id: "veracdvcv", name: "Rounders",bio: "this is the bio Yes", cover: 6, city: " Green", state: "AL", zipCode: "42223", street: "524 tuscaloosa drive", phoneNumber: "270-788-3933", waitTime: 5}
  ]
  const [bars, setBars] = useState(data);


  return (
    <BarContext.Provider value={{ bars, setBars}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Bars") {
              iconName = focused ? "store" : "store";
            } else if (route.name === "Account") {
              iconName = focused ? "account" : "account";
            } else if (route.name === "Favorites") {
              iconName = focused ? "star" : "star";
            } else if (route.name === "Public Stream") {
              iconName = focused ? "mail" : "mail";
            }
            return (
              <MaterialCommunityIcons name={iconName} size={25} color={color} />
            );
          },
        })}
        initialRouteName="Bars"
      >
        <Tab.Screen name="Bars" component={BarsStackNavigator} />
        <Tab.Screen name="Favorites" component={FavoritesStackNavigation} />
        <Tab.Screen name="Public Stream" component={PublicStackNavigation} />
        <Tab.Screen name="Account" component={AccountStackNavigation} />
      </Tab.Navigator>
    </BarContext.Provider>
  );
};

export default AppNavigation;
