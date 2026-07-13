import { Button } from "./components/button";
import styles from "./app.module.css";

export function App() {
  return (
    <div className={styles.container}>
      <Button name="Criar" onClick={() => alert("Criar")} />
      <Button name="Adicionar" />
      <span>0</span>
      <Button name="Remover" />
    </div>
  );
}
