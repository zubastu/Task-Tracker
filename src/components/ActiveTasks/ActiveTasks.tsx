import styles from "./styles.module.scss";
import TaskItem from "../TaskItem/TaskItem.tsx";

const ActiveTasks = () => {
  return (
    <ul className={styles.container}>
      <TaskItem text="Текст для выполняемой задачи" />
    </ul>
  );
};

export default ActiveTasks;
