export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] add':
            return [...initialState, action.payload]

        case '[TODO] remove': 
            return initialState.filter((todo) => todo.id !== action.payload.id);

        case '[TODO] toggle': 
            return initialState.map((todo) => {
                if (todo.id !== action.payload.id) return todo;

                return {...todo, done: !todo.done}
            });

        default:
            return initialState;
    }
};