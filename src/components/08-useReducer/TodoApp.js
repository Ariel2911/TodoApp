import { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';


// const inicialState= [
//   {
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false,
//   },
// ];

const init = () => {  

  return JSON.parse( localStorage.getItem('todos') ) || [] ;

};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleImputChange, reset] = useForm({
    description: '',
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (description.trim().length <= 1) {
      return;
    }
    
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: 'add',
      payload: newTodo,
    };

    dispatch(action);

    reset();
  };

  return (
    <>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-goup-flush">
            {todos.map((todo, i) => (
              <li key={todo.id} className="list-group-item flex-jcsb">
                <p>
                  {i + 1}. {todo.desc}
                </p>
                <button className="btn btn-danger">borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender ..."
              autoComplete="off"
              value={description}
              onChange={handleImputChange}
            />
            <button
              // type='submit'
              className="btn btn-outline-primary mt-1 btn-block"
            >
              agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
