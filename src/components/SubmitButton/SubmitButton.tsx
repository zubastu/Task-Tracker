import { FC } from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  label?: string;
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SubmitButton: FC<ButtonProps> = (props) => {
  const { label, disabled, ...rest } = props;
  return (
    <button
      className={styles.submitButton}
      type="submit"
      disabled={disabled ? disabled : false}
      {...rest}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
