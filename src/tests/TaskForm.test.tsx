import { fireEvent, render, screen } from "@testing-library/react";
import { TaskForm } from "../modules/TaskForm/TaskForm";

const onFormSubmit = jest.fn();

it("renders the TaskForm component", () => {
  render(<TaskForm onFormSubmit={onFormSubmit} icon={<span>Icon</span>} />);

  const taskFormElement = screen.getByTestId("task-form-component");
  expect(taskFormElement).toBeInTheDocument();
});

it("submits form with valid input", () => {
  render(<TaskForm onFormSubmit={onFormSubmit} icon={<span>Icon</span>} />);

  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByRole("button");

  fireEvent.change(inputElement, { target: { value: "Test Task" } });
  expect(buttonElement).toBeEnabled();

  fireEvent.submit(screen.getByTestId("task-form-component"));
  expect(onFormSubmit).toHaveBeenCalledWith("Test Task");
});

it("disables button with empty input", () => {
  render(<TaskForm onFormSubmit={onFormSubmit} icon={<span>Icon</span>} />);

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();

  fireEvent.change(screen.getByRole("textbox"), { target: { value: "" } });

  expect(buttonElement).toBeDisabled();
});

it("renders the TaskForm with the provided icon", () => {
  render(
    <TaskForm
      onFormSubmit={onFormSubmit}
      icon={<div data-testid="icon">Icon</div>}
    />
  );
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
});

it("submits the form with the entered task", () => {
  render(<TaskForm icon={<div />} onFormSubmit={onFormSubmit} />);
  const input = screen.getByLabelText("Task");
  const submitButton = screen.getByRole("button", { name: "task" });

  fireEvent.change(input, { target: { value: "Test" } });
  fireEvent.click(submitButton);

  expect(onFormSubmit).toHaveBeenCalledWith("Test");
});

it("renders with a default value if provided", () => {
  render(
    <TaskForm
      icon={<div />}
      onFormSubmit={onFormSubmit}
      defaultValue="Default Task"
    />
  );

  const input = screen.getByLabelText("Task");

  expect(input).toHaveValue("Default Task");
});

it("don't display placeholder when isEdit is true", () => {
  render(
    <TaskForm onFormSubmit={onFormSubmit} icon={<span>Icon</span>} isEdit />
  );

  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("placeholder", "");
});
