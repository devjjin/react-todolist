import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <div>
        <h3>Working 🔥</h3>
        <TodoItem />
      </div>
      <div>
        <h3>Done 🎉</h3>
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
