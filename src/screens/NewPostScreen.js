import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AuthContext from "../auth/context";
import BarContext from "../components/BarContext";
import AppErrorMessage from "../components/form/AppErrorMessage";
import AppForm from "../components/form/AppForm";
import AppFormTextField from "../components/form/AppFormTextField";
import FormDropDownInput from "../components/form/FormDropDownInput";
import SubmitButton from "../components/form/SubmitFormButton";


function NewPostScreen({navigation}) {
  const { user } = useContext(AuthContext);
  const { bars } = useContext(BarContext);
  

  const handleSubmit = (e) => {
    console.log("posted: bar id " + e.bar.id + " " + e.userId + " " + e.post + " at the bar " + e.bar.name);
    navigation.popToTop();
  };

  return (
    <View style={styles.page}>
      <AppForm
        initialValues={{ name: user.name, userId: user.id, post: "", bar: null }}
        onSubmit={handleSubmit}
      >
        <View style={styles.textInput}>
          <AppFormTextField
            placeholder="New post"
            name="post"
            autoCorrect={true}
            autoCapitilize={true}
          />
        </View>
        <View style={styles.textInput}>
          <FormDropDownInput
            data={bars}
            name="bar"
          />
        </View>
        <View style={styles.button}>
          <SubmitButton title="Post" />
        </View>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    margin: 50,
    width: "90%",
    marginBottom: 50,
  },
  button: {
      position: "absolute",
      bottom: 50,
      width: "90%"
  }
});

export default NewPostScreen;
