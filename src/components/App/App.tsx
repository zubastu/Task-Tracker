import styles from "./styles.module.scss";
import { Navigate, Route, Routes } from "react-router";
import { routes } from "../../utis/routes.ts";
import Login from "../../pages/Login/Login.tsx";
import Tasks from "../../pages/Tasks/Tasks.tsx";
import Registration from "../../pages/Registration/Registration.tsx";

function App() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route element={<Registration />} path={routes.registration} />
        <Route element={<Login />} path={routes.login} />
        <Route element={<Tasks />} path={routes.tasks} />
        <Route
          element={<Navigate to={routes.tasks} replace={true} />}
          path={"*"}
        />
      </Routes>
    </main>
  );
}

export default App;
