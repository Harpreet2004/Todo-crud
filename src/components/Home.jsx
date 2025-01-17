import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeTodo } from '../slices/TodoSlice'

const Home = () => {
    let todos = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const handleTodoDelete = (id) => {
        dispatch(removeTodo(id))
    }


  return (
    <div >
        <h2>Todos ✏️</h2>
        <Link to={"/create"} className='btn btn-success my-3'>Create +</Link>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Todo</th>Link
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {todos.map((todo,index) => (
                        <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.todo}</td>
                            <td>
                                <Link to={`/update/${todo.id}`} className='btn btn-sm btn-primary ms-4'>Edit</Link>
                                <button className='btn btn-sm btn-danger ' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home
