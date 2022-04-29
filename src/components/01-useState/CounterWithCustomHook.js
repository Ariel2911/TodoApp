import '../../style.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with custom Hoook: {state} </h1>
      <hr />
      <button className="btn" onClick={() => increment()}>
        +1
      </button>
      <button className="btn" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn" onClick={() => increment(5)}>
        +5
      </button>
      <button className="btn" onClick={() => decrement(10)}>
        -10
      </button>
      <div>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
};
