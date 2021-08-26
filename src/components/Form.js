import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setFilterTodos }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    let arrSize = todos.length ? todos.length : 0;
    let arr_todo = [];
    if (todos.length) {
      arr_todo = {
        id: todos[arrSize - 1].id + 1,
        text: inputText,
        completed: false
      };
    } else {
      arr_todo = {
        id: 1,
        text: inputText,
        completed: false
      };
    }
    todos.push(arr_todo);
    setTodos([...todos]);
    setInputText('');
  };

  const filterHandler = e => {
    setFilterTodos(
      todos.filter((item, i) => {
        switch (e.target.value) {
          case 'completed':
            return item.completed === true;
            break;
          case 'uncompleted':
            return item.completed === false;
            break;
          default:
            return item;
        }
      })
    );
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputHandler}
      />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
