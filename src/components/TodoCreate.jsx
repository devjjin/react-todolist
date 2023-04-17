import React, { useState } from 'react';

const TodoCreate = ({ todos, setTodos }) => {
  return (
    <div>
      <form>
        <div>
          <label>제목</label>
          <input></input>
          <label>내용</label>
          <input></input>
        </div>
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default TodoCreate;
