import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/Todolist';
import './style.css';

const App = e => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    setFilterTodos(todos);
    saveToLocalstorage();
  }, [todos]);

  const saveToLocalstorage = e => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = e => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
      //setFilterTodos(JSON.parse(localStorage.getItem('todos')));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <Header />
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setFilterTodos={setFilterTodos}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filterTodos={filterTodos}
            setFilterTodos={setFilterTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
