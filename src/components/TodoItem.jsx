import React from 'react';

const TodoItem = ({ todos, setTodos, todoItem }) => {
  return (
    <div>
      <div>
        <h3>{todoItem.title}</h3>
        <span>{todoItem.content}</span>
      </div>
      <div>
        <button>삭제하기</button>
        <button>완료</button>
        {/* <button>취소</button> */}
      </div>
    </div>
  );
};

export default TodoItem;
