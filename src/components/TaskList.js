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
  list-style-type: none;
  height: 100%;
  line-height: 50px;
  color: #272727;
  box-shadow: inset 0px -32px 100px -31px rgba(0, 0, 0, 0.08);
  word-wrap: break-word;
  :hover {
    transition: none;
    text-shadow: 0 3px 2px #485563;
    font-size: 110%;
    border-left: 3px solid #fff;
    border-right: 3px solid #fff;
    text-shadow: 0 0 4px #fff;
  }
`;

const Button = styled.button`
  margin: 15px 0;
  float: right;
  background: #f8a035;
  color: #fff;
  border-radius: 3px;
  border: 2px solid #ccc;
  padding: 3px 10px;
  outline: none;
  cursor: pointer;
`;
