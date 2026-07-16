import styles from "./styles.module.css"
import { Letter } from "../Letter"
export function LetterUsed(){
    return (
        <div className={styles.lettersUsed}>
            <h5> Letras utilizadas </h5>
            <div>
                <Letter value="X" size="small" color="correct"></Letter>
                <Letter value="F" size="small" color="wrong"></Letter>
            </div>
        </div>
    )
}