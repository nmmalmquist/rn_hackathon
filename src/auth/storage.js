import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const KEY = "authToken";

const storeToken = async(authToken) => {
    console.log("store: " + authToken)
    try {
        await SecureStore.setItemAsync(KEY, authToken);
    } catch (error) {
        console.log("error storing auth-token")
    }
};

const getToken = async() => {
    try {
        return await SecureStore.getItemAsync(KEY);
    } catch (error) {
        console.log("could not get auth-token")
    }
};

const getUser = async () => {
    const token = await getToken();
    return token ? await jwtDecode(token) : null;
  };

const deleteToken = async() => {
    try {
        await SecureStore.deleteItemAsync(KEY);
    } catch (error) {
        console.log("could not delete auth-token")
    }
};

export {
    storeToken,
    getUser,
    deleteToken,
    getToken,
  };