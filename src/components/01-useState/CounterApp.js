import { useState } from 'react';
import '../../style.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter4: 20
    });
    
    const { counter1, counter2} = state;
    
    const add = () => {
        setState({
            ...state,
            counter1: counter1 + 1
        });

        // setcounter( {
        //     counter1: counter1+1,
        //     counter2
        // } );
    };

    return(
        <>
        <h2>Counter { counter1 } </h2>
        <h2>Counter { counter2 } </h2>
        <hr />

        <button className="btn btn-primary" onClick = { add }>
            +1
        </button>
        </>
    )
};
