import { useDispatch } from "react-redux";
import { useState } from "react";
import "./TodoListItem.scss";
import { Task } from "../../../utils/types";
import { removeTask, updateTask } from "../../../store/slices/todoSlice";
import { TaskForm } from "../../TaskForm/TaskForm";
import { EditIcon } from "../../../icons/EditIcon";
import { Button } from "../../../components/Button/Button";
import { DeleteIcon } from "../../../icons/DeleteIcon";

type Props = {
  task: Task;
};

export const TodoListItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(removeTask({ id: task.id }));
  };

  const handleEdit = (data: string) => {
    dispatch(
      updateTask({
        id: task.id,
        status: task.status,
        task: data,
      })
    );
    setIsEditing(false);
  };

  const handleCheckbox = () => {
    dispatch(
      updateTask({
        id: task.id,
        status: task.status === "todo" ? "done" : "todo",
        text: task.text,
      })
    );
  };

  return (
    <div className="container">
          {isEditing ? (
              <div className="container__task">
                  <TaskForm
                      onFormSubmit={handleEdit}
                      defaultValue={task.text}
                      icon={<EditIcon />}
                  />
              </div>
          ) : null}
          {!isEditing ? (
        <div className="container__task">
          <p className={`container__text container__text--${task.status}`}>
            {task.text}
          </p>
          <div className="container__actions">
            <input
              className="container__checkbox"
              type="checkbox"
              onChange={() => {
                handleCheckbox();
              }}
              value={task.status === "done" ? "checked" : ""}
            ></input>
            {task.status !== "done" && (
              <Button
                onClick={() => {
                  setIsEditing(true);
                }}
                variant="warning"
                icon={<EditIcon />}
              />
            )}
            <Button
              onClick={handleDelete}
              variant={"error"}
              icon={<DeleteIcon />}
            />
          </div>
          {task.status === "todo" && <div className={`container__mark`}></div>}
        </div>
      ) : null}
    </div>
  );
};
