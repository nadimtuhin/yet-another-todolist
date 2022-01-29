import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

function AddTodo() {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      // eslint-disable-next-line no-alert
      alert('Enter a task before adding !!');
      setValue('');
      return;
    }

    dispatch(
      addTask({
        task: value,
      }),
    );

    setValue('');
  };

  return (
    <>
      <input
        type="text"
        className="add-todo-input"
        placeholder="Add task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="button" className="add-todo-button" onClick={onSubmit}>
        Save
      </button>
    </>
  );
}

export default AddTodo;
