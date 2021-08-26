import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo, index) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
