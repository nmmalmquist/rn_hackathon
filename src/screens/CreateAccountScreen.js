import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";

import AppErrorMessage from "../components/form/AppErrorMessage";
import AppForm from "../components/form/AppForm";
import AppFormTextField from "../components/form/AppFormTextField";
import SubmitButton from "../components/form/SubmitFormButton";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import { validateAndLoginUser } from "../api/auth";
import useAuth from "../auth/useAuth";

const yupValidationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().min(1).required().label("Password"),
  email: Yup.string().email().required().label("Email"),
  firstName: Yup.string().min(1).required().label("Fist Name"),
  lastName: Yup.string().min(1).required().label("Last Name"),
});

function CreateAccountScreen({navigation}) {
  const { createAccount } = useAuth();
  const [validCredentials, setValidCredentials] = useState(true);

  const handleSubmit = async (userData) => {
    const response = await createAccount(userData);
    if (
      response === "Email already exists." ||
      response === "username already exists."
    ) {
      setValidCredentials(false);
    }
    else{
        navigation.navigate("Entry")
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <AppText style={styles.title}>Create your account</AppText>
        <AppForm
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={yupValidationSchema}
        >
          <View style={styles.form}>
            <View style={styles.inputFields}>
              <View style={styles.textBox}>
                <AppFormTextField
                  placeholder="First Name"
                  name="firstName"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.textBox}>
                <AppFormTextField
                  placeholder="Last Name"
                  name="lastName"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.textBox}>
                <AppFormTextField
                  IconComponent={
                    <MaterialCommunityIcons
                      name="email"
                      size={30}
                      color={colors.second}
                    />
                  }
                  placeholder="Email"
                  name="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  autoCapitilize={false}
                />
              </View>
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
            {validCredentials ? null : (
              <AppText style={styles.invalidCredentials}>
                Email and or username is already being used
              </AppText>
            )}
            <SubmitButton
              title="Create Account"
              buttonStyle={styles.submitButton}
            />
          </View>
        </AppForm>
      </View>
    </ScrollView>
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
    marginBottom: 15,
    width: "70%",
  },
  inputFields: {
    width: "100%",
    marginBottom: 50,
  },
  textBox: {
    marginVertical: 15,
  },
  title: {
    fontSize: 30,
  },
  invalidCredentials: {
    color: colors.danger,
  },
  submitButton: {
    backgroundColor: colors.primary,
    marginBottom: 50,
  },
});

export default CreateAccountScreen;
