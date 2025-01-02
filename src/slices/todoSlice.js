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
            const id = action.payload;
            const ind = state.findIndex(todo => todo.id === id);
            if(ind != -1) {
                state.splice(ind,1)
            }
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