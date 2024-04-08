import { createSlice } from "@reduxjs/toolkit"


const initialState = { ToDo: [] }
export const ToDosSlice = createSlice({
    name: 'ToDos',
    initialState,

    reducers: {
        addToDos: (state, action) => {
            state.ToDo.push(action.payload)
        },
        removeToDos: (state, action) => {
            state.ToDo = state.ToDo.filter((todos) => todos !== action.payload)
        }
    }
})
export const { addToDos, removeToDos } = ToDosSlice.actions
export default ToDosSlice.reducer