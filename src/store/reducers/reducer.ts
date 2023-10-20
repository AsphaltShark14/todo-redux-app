import { combineReducers } from "redux";
import { todoSlice } from "../slices/todoSlice";

export const mainReducer = combineReducers({
    tasks: todoSlice.reducer,
})