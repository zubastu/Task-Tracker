import styles from "./styles.module.scss";
import ActiveTasks from "../ActiveTasks/ActiveTasks.tsx";
import CompletedTasks from "../CompleedTasks/CompletedTasks.tsx";
import DragDropContainer from "../DragDropContainer/DragDropContainer.tsx";

const TaskContainer = () => {
  return (
    <section className={styles.container}>
      <DragDropContainer>
        <ActiveTasks />
      </DragDropContainer>
      <CompletedTasks />
    </section>
  );
};

export default TaskContainer;
