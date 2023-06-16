import { useEffect, useReducer } from "react";
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = ({initialState}) => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add',
            payload: todo
        }

        dispatch(action);
    }

    const handleRemoveTodo = (todo) => {
        const action = {
            type: '[TODO] remove',
            payload: todo
        }

        dispatch(action);
    }

    const handleToggleTodo = (todo) => {
        const action = {
            type: '[TODO] toggle',
            payload: todo
        }

        dispatch(action);
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingCount: todos.filter((t) => !t.done).length,
        handleNewTodo,
        handleToggleTodo,
        handleRemoveTodo,
    }
}
