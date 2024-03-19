import styles from "./styles.module.scss";
import { ReactNode } from "react";

const Icon: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.icon}>{children}</div>;
};

export default Icon;
