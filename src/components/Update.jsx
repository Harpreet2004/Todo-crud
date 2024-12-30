import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateTodo } from "../slices/TodoSlice";

const Update = () => {
  const todoState = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const filterExistingTodo = todoState.filter((t) => t.id == id);
  const { todo } = filterExistingTodo[0];

  const [newTodo, setNewTodo] = useState(todo);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ todo: newTodo, id }));
    navigate("/")
  };

  return (
    <div>
      <h1>Update Todo Details</h1>
      <form onSubmit={handleUpdate}>
        <label>Enter Todo:</label>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          id="inputBox"
          name="todo"
          placeholder="Type something..."
          required
        />
        <br></br>
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  );
};

export default Update;
