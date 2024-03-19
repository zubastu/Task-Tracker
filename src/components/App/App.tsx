import styles from "./styles.module.scss";
import Icon from "../Icon/Icon.tsx";
function App() {
  return (
    <>
      <Icon>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 13.3333C3.55719 11.6817 5.67134 10.6667 8 10.6667C10.3287 10.6667 12.4428 11.6817 14 13.3333M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Icon>
    </>
  );
}

export default App;
