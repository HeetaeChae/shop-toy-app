import React, { ChangeEvent } from "react";
import { InputTypeEnum } from "../../types/inputType.d";

interface FormInputProps {
  type: InputTypeEnum;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function FormInput(props: FormInputProps): JSX.Element {
  const { type, value, handleChange, placeholder } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
