import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <div>
        <h3>Working 🔥</h3>
        {todos
          .filter(todo => !todo.isDone)
          .map(todoItem => (
            <TodoItem key={todoItem.id} todos={todos} setTodos={setTodos} todoItem={todoItem} />
          ))}
      </div>
      <div>
        <h3>Done 🎉</h3>
        {todos
          .filter(todo => todo.isDone)
          .map(todoItem => (
            <TodoItem key={todoItem.id} todos={todos} setTodos={setTodos} todoItem={todoItem} />
          ))}
      </div>
    </div>
  );
}

export default TodoList;
