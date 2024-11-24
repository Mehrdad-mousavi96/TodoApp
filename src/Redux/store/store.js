import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/taskSlice";



 export const store = configureStore({
    reducer: {
        todoStore: todoReducer,
    }
 })

