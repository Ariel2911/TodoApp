import { useState } from "react"


export const useCounter = ( inicialState = 10 ) => {
    const [Counter, setState] = useState(inicialState);

    const increment = ( factor = 1 ) => {
        setState( Counter+factor);
    };

    const decrement = ( factor = 1) => {
        setState( Counter-factor);
    };

    const reset = () => {
        setState( inicialState);
    };

    return{
        Counter,
        increment,
        decrement,
        reset
    }
};
