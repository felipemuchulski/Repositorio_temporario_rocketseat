import styles from "./app.module.css";
import { Counter } from "./components/counter";

export function App() {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  );
}
