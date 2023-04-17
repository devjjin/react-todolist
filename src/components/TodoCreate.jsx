import React, { useState } from 'react';

const TodoCreate = ({ todos, setTodos }) => {
  const [todoItem, setTodoItem] = useState({ id: '', title: '', content: '', isDone: false });

  const onChangeHandler = e => {
    setTodoItem({ ...todoItem, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      ...todoItem,
    };
    setTodos([...todos, newTodo]);
    setTodoItem({ title: '', content: '' });
  };

  return (
    <div>
      <form>
        <div>
          <label>제목</label>
          <input type="text" id="title" value={todoItem.title} onChange={onChangeHandler}></input>
          <label>내용</label>
          <input type="text" id="content" value={todoItem.content} onChange={onChangeHandler}></input>
        </div>
        <button onClick={onSubmitHandler}>추가하기</button>
      </form>
    </div>
  );
};

export default TodoCreate;