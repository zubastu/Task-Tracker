import styles from "./styles.module.scss";
import { FC, ReactNode } from "react";

type TButtonConstructorProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const ButtonsConstructor: FC<TButtonConstructorProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default ButtonsConstructor;
