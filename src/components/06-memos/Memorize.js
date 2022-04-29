import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";


export const Memorize = () => {

    const { Counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);


    return(
        <>
          <h1>Memorize</h1>
          <hr />

          <p> Counter <Small value={Counter} /> </p>

          <button className="btn btn-primary" onClick={ () => increment() }>+1</button>
          <button className="btn btn-outline-primary ms-3" onClick={ () => setShow( !show ) }>
              Show/Hide { JSON.stringify(show)}
          </button>

        </>
    )
};
