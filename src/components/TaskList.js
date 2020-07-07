import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const TaskList = ({ todos, removeTask }) => (
  <ul>
    {todos.map(todo => (
      <List key={todo.id}>
        <span>{todo.name}</span>
        <Button type="button" onClick={() => removeTask(todo.id)}>
          Delete
        </Button>
      </List>
    ))}
  </ul>
);

TaskList.propTypes = {
  todos: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
    }),
  ).isRequired,

  removeTask: T.func.isRequired,
};

export default TaskList;

const List = styled.li`
  list-style: none;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
`;

const Button = styled.button`
  float: right;
  background: #f8a035;
  color: #fff;
  border-radius: 3px;
  border: 2px solid #ccc;
  padding: 3px 10px;
  outline: none;
  cursor: pointer;
`;
