import React from 'react';
import './App.css';
import "./styles.scss";
import { AddTask } from './modules/AddTask/AddTask';
import { TodoList } from './modules/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <div className='Container'>
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
