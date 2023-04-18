import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  const onRemoveHandler = id => setTodos(todos.filter(todo => todo.id !== id));
  const onStatusHandler = id => setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));

  const workingTodos = todos.filter(todo => !todo.isDone);
  const doneTodos = todos.filter(todo => todo.isDone);

  return (
    <div className="todolist__container">
      <h3>Working 🔥</h3>
      <div className="todoitem__container">
        {workingTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onRemoveHandler={() => onRemoveHandler(todoItem.id)}
            onStatusHandler={() => onStatusHandler(todoItem.id)}
          />
        ))}
      </div>
      <h3>Done 🎉</h3>
      <div className="todoitem__container">
        {doneTodos.map(todoItem => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onRemoveHandler={() => onRemoveHandler(todoItem.id)}
            onStatusHandler={() => onStatusHandler(todoItem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
