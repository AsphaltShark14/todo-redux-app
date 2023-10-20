import { combineReducers } from "@reduxjs/toolkit";
import { todoSlice } from "../slices/todoSlice";

export const mainReducer = combineReducers({
    todos: todoSlice.reducer,
})