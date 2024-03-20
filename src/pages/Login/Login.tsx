import styles from "./styles.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
const Login = () => {
  return (
    <section className={styles.container}>
      <LoginForm />
    </section>
  );
};

export default Login;
