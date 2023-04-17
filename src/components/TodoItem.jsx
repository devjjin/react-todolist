import React from 'react';

const TodoItem = ({ todoItem, todos, setTodos }) => {
  const onRemoveHandler = id => {
    const removeTodo = todos.filter(todo => todo.id !== id);
    setTodos(removeTodo);
  };

  const onStatusHandler = id => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <div>
      <div key={todoItem.id}>
        <h3>{todoItem.title}</h3>
        <div>{todoItem.content}</div>
        <div>
          <button onClick={() => onRemoveHandler(todoItem.id)}>삭제하기</button>
          <button onClick={() => onStatusHandler(todoItem.id)}>{!todoItem.isDone ? '완료' : '취소'}</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
