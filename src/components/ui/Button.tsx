/* eslint-disable react/button-has-type */
import React from "react";
import { ButtonTypeEnum } from "../../types/buttonType.d";

interface ButtonProps {
  type: ButtonTypeEnum;
  value: string;
  handleClickButton: () => void;
}

function Button(props: ButtonProps): JSX.Element {
  const { type, value, handleClickButton } = props;

  if (type === ButtonTypeEnum.SUBMIT) {
    return <button type={type}>{value}</button>;
  }

  return (
    <button type={type} onClick={handleClickButton}>
      {value}
    </button>
  );
}

export default Button;
