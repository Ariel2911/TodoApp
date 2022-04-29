import { useState } from "react"
import { MultipleCustomHooks } from "../03-example/MultipleCustomHooks"

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow( !show );
    }
    //
    return(
        <>
          <h1>Real Example Ref</h1>
          <hr />

          { show && <MultipleCustomHooks /> }

          <button className="btn btn-primary mt-5" onClick={ handleClick }>
              Show/Hide
          </button>
        </>
    )
}