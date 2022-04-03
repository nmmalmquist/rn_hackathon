import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, {useState, useContext} from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import * as Yup from "yup";


import AppText from "../components/AppText";
import AppForm from "../components/form/AppForm";
import AppFormTextField from "../components/form/AppFormTextField";
import SubmitButton from "../components/form/SubmitFormButton";
import colors from "../config/colors";
import { validateAndLoginUser } from "../api/auth";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/context";


const yupValidationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().min(1).required().label("Password"),
});

function SignInUserScreen(props) {
  
  const {setUser} = useContext(AuthContext)
  const {login} = useAuth();
  const [validCredentials, setValidCredentials] = useState(true);

  const handleSubmit = async ({ username, password }) => {
  setUser({id: "f4t5g", name: "Jacob Malmquist"})
    //response return 400 if the API call fails or a jwt token if successful
    const response = await validateAndLoginUser({username: username.toLowerCase(), password: password})

    //400 means the sign in valid because of invalid email or password
    if (response == 400) return setValidCredentials(false);

    //cache user and thus logging into main app navigation
    login(response.data)
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={yupValidationSchema}
      >
        <View style={styles.form}>
          <View style={styles.inputFields}>
            <View style={styles.textBox}>
              <AppFormTextField
                IconComponent={
                  <MaterialCommunityIcons
                    name="account"
                    size={30}
                    color={colors.second}
                  />
                }
                placeholder="Username"
                name="username"
                autoCorrect={false}
                autoCapitilize={false}
              />
            </View>
            <View style={styles.textBox}>
              <AppFormTextField
                IconComponent={
                  <MaterialCommunityIcons
                    name="key"
                    size={30}
                    color={colors.second}
                  />
                }
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitilize={false}
              />
            </View>
          </View>
          <SubmitButton title="Log in" buttonStyle={styles.submitButton} />
        </View>
        {validCredentials ? null : <AppText style={styles.invalidCredentials}>Invalid Email/Password</AppText>}
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  image: {
    marginTop: -100,
    marginBottom: 30,
    width: "70%",
  },
  inputFields: {
    width: "100%",
    marginBottom: 50,
  },
  textBox: {
    marginVertical: 15,
  },
  invalidCredentials:{
    color: colors.danger
  },
  submitButton: {
    backgroundColor: colors.primary,
  },
});

export default SignInUserScreen;
