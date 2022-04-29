import { useCounter } from '../../hooks/useCounter';
import { useFech } from '../../hooks/useFech';

export const MultipleCustomHooks = () => {
  const { Counter, increment } = useCounter(1);

  const { loading, data } = useFech(
    `https://www.breakingbadapi.com/api/quotes/${Counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h2>breakingBad Quotes</h2>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className=" blockquote text-end">
          <p className="mb-8"> {quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}
      <hr />
      <button className='btn btn-primary text-start' onClick = { () => { increment () } } >siguiente frase</button>
    </>
  );
};
