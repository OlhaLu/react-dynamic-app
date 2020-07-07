import React, { useState, useEffect, useReducer, useMemo } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import localStorage from './localStorage';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TASK':
      return [...state, payload.todo];

    case 'REMOVE_TASK':
      return state.filter(todo => todo.id !== payload.id);

    case 'SET_STORAGE':
      return payload.todos;

    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const todos = localStorage.getLocalStorage('todos');
    if (todos) {
      dispatch({
        type: 'SET_STORAGE',
        payload: {
          todos,
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.saveLocalStorage('todos', todos);
  }, [todos]);

  const addTask = ({ name }) => {
    const todo = {
      id: shortid.generate(),
      name,
    };

    dispatch({
      type: 'ADD_TASK',
      payload: {
        todo,
      },
    });
  };

  const removeTask = id => {
    dispatch({
      type: 'REMOVE_TASK',
      payload: {
        id,
      },
    });
  };

  const [filter] = useState('');

  const todosFilter = useMemo(() => {
    return todos.filter(todo =>
      todo.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [todos, filter]);

  return (
    <>
      <Container>
        <h1>To Do List</h1>
        <h2>What you want to add</h2>
        <CreateTask addTask={addTask} />
        <h2>What you must To Do</h2>
        <TaskList todos={todosFilter} removeTask={removeTask} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 900px;
  margin: 10px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;
