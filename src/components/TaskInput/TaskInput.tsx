import { useFormContext } from "react-hook-form";

import styles from "./styles.module.scss";

export interface InputProps {
  name: string;
  type?: string;
  required?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
}

const TaskInput: React.FC<InputProps> = ({
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

export default TaskInput;
