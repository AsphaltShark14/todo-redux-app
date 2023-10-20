import "./App.css";
import { AddTask } from "./modules/AddTask/AddTask";
import { TodoList } from "./modules/TodoList/TodoList";
import "./styles.scss";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <div className="Container">
        <header className="AppHeader">
          <p>My to-dos</p>
        </header>
        <AddTask />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
