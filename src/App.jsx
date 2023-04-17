import React, { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import './App.css';

const App = () =>  {
  return (
    <div>
      <TodoHeader/>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;
