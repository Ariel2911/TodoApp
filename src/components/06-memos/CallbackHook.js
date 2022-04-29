import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";



export const CallbackHook = () => {

    const [Counter, setCounter] = useState(10);

    //primer caso de uso
    const increment = useCallback( ( num) => {
        setCounter(c => c + num);
    }, [ setCounter ] )
    //Segundo caso de uso
    useEffect( () => {
        //???
    }, [increment])

    return(
        <>
          <h1>CallbackHook: { Counter} </h1>
          <hr />

          < ShowIncrement increment={ increment } />

        </>
    )
};