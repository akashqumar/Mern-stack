import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText("");
    }
    const oninputchange = (e) => {
        setText(e.target.value)
    }
  return (
    <form className='form' onSubmit={onFormSubmit}>
      <input
        placeholder='Add Todo'
        className='input'
        onChange={oninputchange}
        value={text}
      />
    </form>
  )
}

export default TodoForm
