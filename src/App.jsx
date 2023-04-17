import React, { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <TodoHeader />
      <TodoCreate todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
