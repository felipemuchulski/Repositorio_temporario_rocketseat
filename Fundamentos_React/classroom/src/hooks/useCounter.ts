import { useEffect, useState } from "react";

export function useCounter(initivalValue = 0) {
    const [count, setCount] = useState(initivalValue);
    useEffect(() => {
        console.log("Contador mudou para: ", count)
    }, [count])

    function increment(){
        setCount(currentCount => currentCount + 1);
    }

    function decrement() {
        setCount(currentCount => currentCount - 1);
    }

    function reset() {
        setCount(initivalValue)
    }

    return {
        count,
        increment,
        decrement,
        reset,
    }
}