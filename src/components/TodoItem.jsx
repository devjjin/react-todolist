import React from 'react';

const TodoItem = ({ todoItem, onRemoveHandler, onStatusHandler}) => {

  return (
    <div className="todoitem__container">
      <div className="todoitem" key={todoItem.id}>
        <h3>{todoItem.title}</h3>
        <div>{todoItem.content}</div>
        <div className="todoitem__btn__container">
          <button className="todoitem__removeBtn" onClick={onRemoveHandler}>삭제하기</button>
          <button className="todoitem__statusBtn" onClick={onStatusHandler}>{!todoItem.isDone ? '완료' : '취소'}</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
