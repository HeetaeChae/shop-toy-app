import React, { ChangeEvent } from "react";
import { InputTypeEnum } from "../../types/InputType.d";

interface InputProps {
  type: InputTypeEnum;
  value: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps): JSX.Element {
  const { type, value, handleChangeInput } = props;

  return (
    <input type={type} value={value} onChange={(e) => handleChangeInput(e)} />
  );
}

export default Input;
