import React, { useState, useRef, useEffect } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

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

  const onChangeName = e => {
    const changeName = e.target.value;
    setName(changeName);
  };

  const onSubmit = e => {
    e.preventDefault();
    addTask({ name });
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <span>Items: </span>
      <input
        type="text"
        name="name"
        onChange={onChangeName}
        id={nameID.current}
        value={name}
      />

      <button type="submit">Add task ToDo</button>
    </form>
  );
};

CreateTask.propTypes = {
  addTask: T.func.isRequired,
};

export default CreateTask;
