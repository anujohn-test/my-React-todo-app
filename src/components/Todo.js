import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
  const completeHandler = e => {
    setTodos(
      todos.map((item, index) => {
        if (item.id == todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = e => {
    setTodos(todos.filter((item, index) => item.id !== todo.id));
  };

  return (
    <>
      {console.log(todos)}
      <div className="todo" key={todo.id}>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </li>
        <button
          className="complete-btn"
          onClick={completeHandler}
          data-complete-id={todo.id}
        >
          <i className="fas fa-check" />
        </button>
        <button
          className="trash-btn"
          onClick={deleteHandler}
          data-trash-id={todo.id}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </>
  );
};

export default Todo;
