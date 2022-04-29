import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';

export const Layout = () => {
  const { Counter, increment } = useCounter(1);

  const { data } = useFech(
    `https://www.breakingbadapi.com/api/quotes/${Counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());  
    setBoxSize(pTag.current.getBoundingClientRect());  
    
  }, [quote])

  return (
    <>
      <h2>Layout Effect</h2>
      <hr />

      <blockquote className=" blockquote text-start flex">
        <p ref={ pTag } className="mb-8"> {quote} </p>
      </blockquote>
      <pre>
          { JSON.stringify( boxSize, null, 3 ) }
      </pre>

      <button
        className="btn btn-primary text-start"
        onClick={() => {
          increment();
        }}
      >
        siguiente frase
      </button>
    </>
  );
};
