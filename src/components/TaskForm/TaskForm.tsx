import styles from "./styles.module.scss";

import FormGroup from "../FormGroup/FormGroup.tsx";
import TaskInput from "../TaskInput/TaskInput.tsx";
import ButtonsConstructor from "../Buttons/BttonsConstructor.tsx";

const TaskForm = () => {
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <FormGroup onSubmit={onSubmit} style={styles.form}>
      <div className={styles.inputContainer}>
        <TaskInput name="task" />
        <ButtonsConstructor>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7.33331V14.6666M7.33337 11H14.6667M20.1667 11C20.1667 16.0626 16.0627 20.1666 11 20.1666C5.93743 20.1666 1.83337 16.0626 1.83337 11C1.83337 5.93737 5.93743 1.83331 11 1.83331C16.0627 1.83331 20.1667 5.93737 20.1667 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonsConstructor>
      </div>
    </FormGroup>
  );
};

export default TaskForm;
