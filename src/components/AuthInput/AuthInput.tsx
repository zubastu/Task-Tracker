import { useFormContext, RegisterOptions } from "react-hook-form";

import styles from "./styles.module.scss";
import { FC } from "react";

export interface InputProps {
  name: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
  validation?: RegisterOptions;
  onBlur?: () => void;
  disabled?: boolean;
}

const AuthInput: FC<InputProps> = ({
  name,
  type = "text",
  disabled = false,
  ...rest
}) => {
  const { register } = useFormContext();

  return (
    <input
      className={styles.input}
      type={type}
      {...register(name)}
      disabled={disabled}
      {...rest}
    />
  );
};

export default AuthInput;
