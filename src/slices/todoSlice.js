import { createSlice } from "@reduxjs/toolkit";
import { preDefinedTodos } from "../Data";

export const todoSlice = createSlice({
    name: "Todo",
    initialState: preDefinedTodos,
    reducers: {
        addTodo: (state,action) => {
            state.push(action.payload)
        },
        removeTodo: (state,action) => {
            const {id} = action.payload;
            state = state.filter((todo) => todo.id !== id)
        },
        updateTodo: (state,action) => {
            const {todo,id} = action.payload;
            const findtodo = state.find(t => t.id == id);
            if(findtodo){
                findtodo.todo = todo;
            }
            else {
                alert("todo doesn't exist")
            }
        }
    }
})

export const {addTodo,updateTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer