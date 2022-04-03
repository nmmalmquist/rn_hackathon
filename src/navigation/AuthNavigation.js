import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EntryScreen from "../screens/EntryScreen";
import colors from "../config/colors";
import SignInUserScreen from "../screens/SignInUserScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";

function AuthNavigation(props) {
  const Stack = createStackNavigator();
  const SignInStack = () => (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        title: null,
        headerBackTitle: "Back",
        headerTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.primary,
          shadowOpacity: 0, //removes divider on ios
          elevation: 0, //removes divider on android
        },
      }}
    >
      <Stack.Screen
        name="Entry"
        component={EntryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="Login" component={SignInUserScreen} />
    </Stack.Navigator>
  );

  return <SignInStack />;
}

export default AuthNavigation;
