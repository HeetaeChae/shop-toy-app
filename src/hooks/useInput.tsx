import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

function useInput<T>(props: { initialValue: T }): [
  // value type
  T,
  // setValue Type
  Dispatch<SetStateAction<T>>,
  // function Type
  (e: ChangeEvent<HTMLInputElement>) => void,
] {
  const { initialValue } = props;

  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  };

  return [value, setValue, handleChange];
}

export default useInput;
