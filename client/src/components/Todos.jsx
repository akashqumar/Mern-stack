import React, { useEffect } from 'react'
import {getAllTodos,deleteTodo} from '../redux/actions/index'
import {useDispatch,useSelector} from 'react-redux'
import Todo from './Todo';
import Tabs from './Tabs';
import {ALL_TODOS,DONE_TODOS,ACTIVE_TODOS} from '../redux/actions/type'

const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);
    
    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    const getTodos = () => {
        switch (currentTab) {
            case ALL_TODOS:
                return todos;
            case ACTIVE_TODOS:
                return todos.filter(todo => !todo.done);
            case DONE_TODOS:
                return todos.filter(todo => todo.done);
            default:
                return todos;
        }
    }

    const removeDoneTodos = () => {
        todos.filter(todo => todo.done).forEach(todo => {
            dispatch(deleteTodo(todo._id));
        })
    }

  return (
    <article>
    <div>
        <Tabs currentTab={currentTab}/>
        {
            todos.some(todo => todo.done) ? (
                <button
                    onClick={removeDoneTodos}
                    className='button clear'
                >Remove All Done</button>
            ) : null
        }
    </div>
        <ul>
            {getTodos().map(todo =>
                <Todo
                key={todo._id}
                    todo={todo}
                />
            )}
        </ul>
    </article>
  )
}

export default Todos
