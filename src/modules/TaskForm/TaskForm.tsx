import { FormEvent, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./TaskForm.scss";

type Props = {
  onFormSubmit: (data: string) => void;
  defaultValue?: string;
  icon: React.ReactNode;
  isEdit?: boolean;
};

const TASK_ID = "task";

export const TaskForm = ({
  onFormSubmit,
  defaultValue,
  icon,
  isEdit = false,
}: Props) => {
  const [isValid, setIsValid] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    onFormSubmit(data.get(TASK_ID) as string);
    event.currentTarget.reset();
    setIsValid(false);
  };
  const isFormValid = (event: FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const inputValue = data.get(TASK_ID) as string;
    if (inputValue.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form className="addForm" onSubmit={onSubmit} onChange={isFormValid}>
      <label htmlFor={TASK_ID} className="hiddenLabel">
        Task
      </label>
      <Input
        id={TASK_ID}
        name={TASK_ID}
        placeholder={isEdit ? "" : "Add a new task"}
        defaultValue={defaultValue}
      />
      <Button
        aria-label={TASK_ID}
        type="submit"
        variant={isValid || defaultValue ? "success" : "disabled"}
        disabled={!isValid && !defaultValue}
        icon={icon}
      />
    </form>
  );
};
