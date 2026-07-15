import styles from "./styles.module.css"
import tipicon from "../../assets/tip.svg"
type Props = {
    tip: string
}

export function Tip({tip}: Props) {
    return <div className={styles.tip}>
        <img src={tipicon} alt="Ícone de dica" />

        <div>
            <h3>Dica</h3>
            <p>{tip}</p>
        </div>
    </div>
}