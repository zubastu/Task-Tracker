import styles from "./styles.module.scss";
import { FC } from "react";

type TTaskItemProps = {
  text: string;
};

const TaskItem: FC<TTaskItemProps> = ({ text }) => {
  return (
    <li className={styles.container}>
      <div className={styles.taskTextContentContainer}>
        <p className={styles.taskTextContent}>{text}</p>
        <p className={styles.taskActiveTime}>6:50 - 7:05</p>
      </div>
      <div className={styles.taskInteractiveContainer}>
        <p className={styles.taskTimeTracker}>15:47</p>
      </div>
    </li>
  );
};

export default TaskItem;
