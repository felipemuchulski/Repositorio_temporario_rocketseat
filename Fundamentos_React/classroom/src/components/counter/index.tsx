import { useCounter } from "../../hooks/useCounter";
import { Button } from "../button";

export function Counter(){
    const { count, increment, decrement, reset } = useCounter(10)

    return (
        <>
            <Button name="Adicionar" onClick={increment} />
            <span>{count}</span>
            <Button name="Remover" onClick={decrement} />
            <Button name="Reiniciar" onClick={reset} />
        </>
    );
}