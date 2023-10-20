import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "../store/store";

it("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const appElement = screen.getByTestId("app-container");
  expect(appElement).toBeInTheDocument();
});

it("check if header has text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headerElement = screen.getByText("My to-dos");
  expect(headerElement).toBeInTheDocument();
});

it("check if app has TaskForm component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const addTaskElement = screen.getByTestId("task-form-component");
  expect(addTaskElement).toBeInTheDocument();
});

it("check if component has TodoList component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const todoListElement = screen.getByTestId("todo-list-component");
  expect(todoListElement).toBeInTheDocument();
});
