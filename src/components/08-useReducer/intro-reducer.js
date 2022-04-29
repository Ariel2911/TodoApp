const inicialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = inicialState, action ) => {

    if( action?.type === 'agregar' ) {
        return [ ...state, action.payload ];
    }

    return state;
};

let todos = todoReducer();

const newTod = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const action = {
    type: 'agregar',
    payload: newTod
};

todos = todoReducer( todos, action);

console.log(todos);