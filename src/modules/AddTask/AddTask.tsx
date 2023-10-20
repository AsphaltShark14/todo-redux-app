import { useDispatch, useSelector } from "react-redux"
import { Task } from "../../utils/types";
import { addTask } from "../../store/slices/todoSlice";
import { TaskForm } from "../TaskForm/TaskForm";
import { AddIcon } from "../../icons/AddIcon";

export const AddTask = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state: Task[]) => state);

    const handleSubmit = (text: string) => {
        dispatch(addTask({
            text,
            id: todoList.length + 1,
            status: "todo",
        }));
    };

    return <TaskForm onFormSubmit={handleSubmit} icon={<AddIcon />} />
}