import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/Button/Button";
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { AcceptIcon } from "../../../icons/AcceptIcon";
import { DeleteIcon } from "../../../icons/DeleteIcon";
import { EditIcon } from "../../../icons/EditIcon";
import { removeTask, updateTask } from "../../../store/slices/todoSlice";
import { Task } from "../../../utils/types";
import { TaskForm } from "../../TaskForm/TaskForm";
import "./TodoListItem.scss";

type Props = {
  task: Task;
};

export const TodoListItem = ({ task }: Props) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(removeTask({ id: task.id }));
  };

  const handleEdit = (value: string) => {
    dispatch(
      updateTask({
        id: task.id,
        status: task.status,
        text: value,
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
        <div className="container-item">
          <TaskForm
            onFormSubmit={handleEdit}
            defaultValue={task.text}
            icon={<AcceptIcon />}
            isEdit
          />
        </div>
      ) : null}
      {!isEditing ? (
        <div className="container-item">
          <div className="container-checkbox">
            <Checkbox
              type="checkbox"
              onChange={() => {
                handleCheckbox();
              }}
              value={task.status === "done" ? "checked" : ""}
            />
            <p className={`container-text container-text_${task.status}`}>
              {task.text}
            </p>
          </div>
          <div className="container-actions">
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
          <div className={`container-divider`} />
        </div>
      ) : null}
    </div>
  );
};
