import React from 'react';
import T from 'prop-types';

const TaskList = ({ todos, removeTask }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.name}</span>
        <button type="button" onClick={() => removeTask(todo.id)}>
          Delete
        </button>
      </li>
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
