import React from 'react'
import {toggleTodo,updateTodo,deleteTodo} from '../redux/actions/index'
import {useDispatch} from 'react-redux'
import { useState } from 'react'


const Todo = ({todo}) => {
    
    const dispatch = useDispatch();
    const [edit,setEdit] = useState(false);
    const [text,setText] = useState(todo.data);

    const onFormSubmit = (e) =>{
        e.preventDefault();
        setEdit(prevState => !prevState);
        dispatch(updateTodo(todo._id,text));
    }

  return (
    <li 
    className='task'
    onClick={() => dispatch(toggleTodo(todo._id))}
    style={{
        textDecoration : todo.done ? 'line-through' : ''
        ,color:todo.done ? '#bdc3c7': '#34495e'
    }}
    >
        <span style={{display : edit ? "none": ""}}>{todo.data}</span>

        <form
            style={{display : edit ? "inline": "none"}} 
            onSubmit={onFormSubmit}
        >
            <input
                type='text'
                value={text}
                className='edit-todo'
                onChange={(e) => setText(e.target.value)}
            />
        </form>
        {/* delete icon */}
        <span className='icon' onClick={() => dispatch(deleteTodo(todo._id))}>
            <i className='fas fa-trash'/>
        </span>
        {/* edit icon */}
        <span className='icon'
            onClick={() => setEdit(prevState => !prevState)}
        >
            <i className='fas fa-pen'/>
        </span>

    </li>
  )
}

export default Todo
