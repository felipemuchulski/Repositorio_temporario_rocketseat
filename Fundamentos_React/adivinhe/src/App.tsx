import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LetterUsed } from "./components/LettersUsed";

export default function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo!");
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame}></Header>
        <Tip tip="Uma das linguagens de programação mais utilizadas"></Tip>

        <div className={styles.word}>
          <Letter value="F"></Letter>
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar"></Button>
        </div>

        <LetterUsed></LetterUsed>
      </main>
    </div>
  );
}
