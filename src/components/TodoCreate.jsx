import React, { useState } from 'react';

const TodoCreate = ({ todos, setTodos }) => {
  const [todoItem, setTodoItem] = useState({ id: 0, title: '', content: '', isDone: false });

  const onChangeHandler = e => {
    setTodoItem({ ...todoItem, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      ...todoItem,
    };
    setTodos([...todos, newTodo]);
    setTodoItem({ title: '', content: '' });
  };

  return (
    <div className="create__container">
      <form className="form__container" onSubmit={onSubmitHandler}>
        <div className="form__group">
          <label>제목</label>
          <input type="text" id="title" value={todoItem.title} onChange={onChangeHandler}></input>
          <label>내용</label>
          <input type="text" id="content" value={todoItem.content} onChange={onChangeHandler}></input>
        </div>
        <button className="submitBtn">추가하기</button>
      </form>
    </div>
  );
};

export default TodoCreate;