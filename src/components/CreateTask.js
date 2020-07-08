import React, { useState, useRef, useEffect } from 'react';
import T from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';

const CreateTask = ({ addTask }) => {
  const [name, setName] = useState('');
  const nameID = useRef(shortid.generate());

  const keydownHandler = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      addTask({ name });
      setName('');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [name]);

  const onChangeTask = e => {
    const changeName = e.target.value;
    setName(changeName);
  };

  const onSubmitTask = e => {
    e.preventDefault();
    addTask({ name });
    setName('');
  };

  return (
    <form onSubmit={onSubmitTask}>
      <span>Create new task: </span>
      <Form
        placeholder="new task"
        type="text"
        name="name"
        onChange={onChangeTask}
        id={nameID.current}
        value={name}
        required
      />
      <Button type="submit">Add to List</Button>
    </form>
  );
};

CreateTask.propTypes = {
  addTask: T.func.isRequired,
};

export default CreateTask;

const Form = styled.input`
  width: 235px;
  outline: none;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
`;

const Button = styled.button`
  display: flex;
  background: #f8a035;
  color: #fff;
  border-radius: 3px;
  border: 2px solid #ccc;
  padding: 3px 10px;
  outline: none;
  cursor: pointer;
`;
