import { createSelector } from "@reduxjs/toolkit";
import { Todo } from "../../utils/types";

const todoList = (state: Todo) => state.tasks;

export const sortedTodoListSelector = createSelector([todoList], (todoList) => {
    return [...todoList].sort((prev, curr) => {
        if (prev.status === "done" && curr.status === "done") {
            return 1;
        }

        if (prev.status !== "done" && curr.status === "done") {
            return -1;
        }

        return 0;
    });
});