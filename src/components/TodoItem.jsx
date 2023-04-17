import React from 'react';

const TodoItem = ({ todo, setTodos, todos }) => {
  return (
    <div>
      <div>
        <h3>제목</h3>
        <span>내용</span>
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
