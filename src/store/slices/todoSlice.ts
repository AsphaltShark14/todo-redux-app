import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../utils/types";

const initialState: Task[] = [];

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        removeTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id)
        },
        updateTask: (state, action) => {
            const task = state.find((task) => task.id === action.payload.id);

            if (!task) {
                return;
            }

            task.status = action.payload.status;
            task.text = action.payload.text;
        },
    },
});

const { actions } = todoSlice;

export const { addTask, removeTask, updateTask } = actions;

