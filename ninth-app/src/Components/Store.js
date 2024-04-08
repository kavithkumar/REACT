import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import ToDoReducer from "./ToDosSlice"
import productReducer from "./ProductSlice"
import CartReducer from "./CartSlice"

export const store = configureStore({
    reducer: {
        //It is used to pass data to components
        counter: counterReducer,
        ToDos: ToDoReducer,
        Products: productReducer,
        Carts:CartReducer
        //counter={value:currentvalue}
    }
})