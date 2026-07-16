import styles from "./app.module.css";
import { useEffect, useState } from "react";
import { WORDS } from "./utils/words";
import type { Challenge } from "./utils/words";
import { Header } from "./components/Header";
import { Tip } from "./components/Tip";
import { Letter } from "./components/Letter";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { LetterUsed } from "./components/LettersUsed";
import type { LettersUsedProps } from "./components/LettersUsed";

export default function App() {
  // Pontuação: conta quantas letras corretas o jogador acertou
  const [score, setScore] = useState(0);


  // Letra digitada pelo jogador no input
  const [letter, setLetter] = useState("");

  // Lista de letras já utilizadas pelo jogador (com indicação se foi correta ou não)
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);

  // Palavra desafio atual (contém a palavra e a dica)
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  // Exibe alerta ao clicar no botão de reiniciar
  function handleRestartGame() {
    const isConfirmed = window.confirm("Você deseja reiniciar?")
  
    if (isConfirmed) {
      setLettersUsed([])
      setScore(0)
      startGame()
    }
  }


  // Sorteia uma nova palavra aleatória e reseta tentativas e input
  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);

    setLetter("");
  }

  // Função chamada ao clicar em "Confirmar" para verificar o palpite
  function handleConfirm() {
    // Se não há desafio carregado, não faz nada
    if (!challenge) {
      return;
    }

    // Se o input está vazio, alerta o jogador
    if (!letter.trim()) {
      return alert("Digite uma letra!");
    }

    // Converte a letra para maiúscula para comparação
    const value = letter.toUpperCase();

    // Verifica se a letra já foi utilizada antes
    const exist = lettersUsed.find(
      (used) => used.value.toLocaleUpperCase() === value,
    );

    // Se já foi usada, alerta o jogador e não continua
    if (exist) {
      return alert("Você já utilizou a letra " + value);
    }

    // Conta quantas vezes a letra aparece na palavra do desafio
    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    // Se hits > 0, a letra está na palavra (correta)
    const correct = hits > 0;

    // Soma os acertos ao score atual
    const currentScore = score + hits;

    // Adiciona a letra na lista de letras usadas
    setLettersUsed((prevState) => [...prevState, { value, correct }]);

    // Atualiza a pontuação
    setScore(currentScore);

    // Limpa o input para o próximo palpite
    setLetter("");
  }

  // Finaliza o jogo: exibe mensagem, reseta estados e inicia novo jogo
  function endGame(message: string) {
    alert(message)
    setLettersUsed([])
    setScore(0)
    startGame()
  }

  // Executa startGame() uma vez quando o componente é montado
  useEffect(() => {
    startGame();
  }, []);

  // Verifica condições de vitória ou derrota sempre que score ou lettersUsed mudam
  useEffect(() => {
    // Se não há desafio, não verifica nada
    if(!challenge){
      return
    }

    // Usa setTimeout para dar um pequeno delay antes de verificar (evita conflito com re-render)
    const timeout = setTimeout(() => {
      // Se o score é igual ao tamanho da palavra, o jogador acertou todas as letras
      if (score === challenge.word.length) {
        return endGame("Voce descobriu a palavra")
      }

      // Se o número de tentativas atingiu o máximo (tamanho da palavra + 5), o jogador perdeu
      if (lettersUsed.length === challenge.word.length + 5) {
        return endGame("Atingiu o limite de tentativas")
      }
    }, 200)

    // Cleanup: limpa o timeout se o efeito rodar novamente antes dos 200ms
    return () => clearTimeout(timeout)
  }, [score, lettersUsed.length])

  return (
    <div className={styles.container}>
      <main>
        {/* Header: mostra tentativas usadas / máximo e botão de reiniciar */}
        <Header current={lettersUsed.length} max={(challenge?.word.length ?? 0) + 5} onRestart={handleRestartGame}></Header>

        {/* Tip: exibe a dica da palavra atual */}
        <Tip tip={challenge?.tip || ""}></Tip>

        {/* Renderiza cada letra da palavra como um quadrado */}
        <div className={styles.word}>
          {challenge?.word.split("").map((letter, index) => {
            // Verifica se o jogador já adivinhou essa letra
            const letterUsed = lettersUsed.find((used) => used.value.toUpperCase() === letter.toUpperCase())
            // Se já adivinhou, mostra a letra com cor verde; senão, mostra vazio
            return <Letter key={index} value={letterUsed ? letter : ""} color={letterUsed ? "correct" : "default"}></Letter>;
          })}
        </div>

        <h4>Palpite</h4>

        {/* Input para digitar a letra e botão para confirmar */}
        <div className={styles.guess}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm}></Button>
        </div>

        {/* Lista de letras já utilizadas com indicação de certo/errado */}
        <LetterUsed data={lettersUsed}></LetterUsed>
      </main>
    </div>
  );
}
