import React from "react";
import { Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormTextField({ name, ...otherTextInputProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  return (
    <View>
      <AppTextInput
        onChangeText={(text) => {setFieldValue(name, text)}}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherTextInputProps}
      />
      {errors[name] && touched[name] ? null : <Text> </Text>}
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormTextField;
