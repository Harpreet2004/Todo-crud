import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../slices/TodoSlice';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [todo,setTodo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo)

  const handleForm = (e) => { 
    e.preventDefault();
    dispatch(addTodo({todo,id: todoState[todoState.length - 1]?.id + 1 || 1}));
    navigate("/")
  }

  return (
    <div>
        <form onSubmit={handleForm}>
          <label>Enter Todo:</label>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" id="inputBox" name="todo" placeholder="Type something..." required />
          <br></br>
          <br />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create

