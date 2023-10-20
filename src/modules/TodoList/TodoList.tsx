import { useSelector } from "react-redux"
import { sortedTodoListSelector } from "../../store/selectors/todoSelector"
import { Task } from "../../utils/types";
import { TodoListItem } from "./TodoListItem/TodoListItem";

export const TodoList = () => {
    const todoList = useSelector(sortedTodoListSelector);

    return (
        <div className="list">
            {todoList.map((task: Task) => (
                <TodoListItem key={task.id} task={task} />
            ))}
        </div>
    )
}