import React from 'react';

const TodoItem = ({ todoItem, todos, setTodos }) => {
  const onRemoveHandler = id => setTodos(todos.filter(todo => todo.id !== id));

  const onStatusHandler = id => setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));

  return (
    <div className="todoitem__container">
      <div className="todoitem" key={todoItem.id}>
        <h3>{todoItem.title}</h3>
        <div>{todoItem.content}</div>
        <div className="todoitem__btn__container">
          <button className="todoitem__removeBtn" onClick={() => onRemoveHandler(todoItem.id)}>삭제하기</button>
          <button className="todoitem__statusBtn" onClick={() => onStatusHandler(todoItem.id)}>{!todoItem.isDone ? '완료' : '취소'}</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
