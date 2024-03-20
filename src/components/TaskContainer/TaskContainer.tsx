import styles from "./styles.module.scss";
import ActiveTasks from "../ActiveTasks/ActiveTasks.tsx";
import CompletedTasks from "../CompleedTasks/CompletedTasks.tsx";

const TaskContainer = () => {
  return (
    <section className={styles.container}>
      <ActiveTasks />
      <CompletedTasks />
    </section>
  );
};

export default TaskContainer;
