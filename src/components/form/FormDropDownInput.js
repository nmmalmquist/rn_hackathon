import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useFormikContext } from "formik";

function FormDropDownInput({ name, data }) {
  const { setFieldValue } = useFormikContext();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    data.reduce(
      (previousValue, currentValue) => [
        ...previousValue,
        { label: currentValue.name, value: currentValue },
      ],
      []
    )
  );

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onChangeValue={(picked) => {
        setFieldValue(name, picked);
      }}
    />
  );
}

export default FormDropDownInput;
