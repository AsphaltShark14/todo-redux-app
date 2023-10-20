import { useDispatch, useSelector } from "react-redux";
import { AddIcon } from "../../icons/AddIcon";
import { addTask } from "../../store/slices/todoSlice";
import { Todo } from "../../utils/types";
import { TaskForm } from "../TaskForm/TaskForm";

export const AddTask = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: Todo) => state.tasks);

  const handleSubmit = (text: string) => {
    dispatch(
      addTask({
        text,
        id: todoList.length + 1,
        status: "todo",
      })
    );
  };

  return <TaskForm onFormSubmit={handleSubmit} icon={<AddIcon />} />;
};
