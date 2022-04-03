import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";


import AppNavigation from "./src/navigation/AppNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation";
import EntryScreen from "./src/screens/EntryScreen";
import navigationTheme from "./src/navigation/navigationTheme";
import AuthContext from "./src/auth/context";
import SignInUserScreen from "./src/screens/SignInUserScreen";
import {getUser} from "./src/auth/storage";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export default function App() {
  //const [user, setUser] = useState(null);
  const [user, setUser] = useState({id: "ucohewuhevw", name: "Jacob Malmquist"});
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async() => {
    const thisUser = await getUser();
    if (thisUser) return setUser(thisUser)
    setUser(null)
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigation/> : <AuthNavigation/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
