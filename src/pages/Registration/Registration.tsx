import styles from "./styles.module.scss";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.tsx";

const Registration = () => {
  return (
    <section className={styles.container}>
      <RegistrationForm />
    </section>
  );
};

export default Registration;
