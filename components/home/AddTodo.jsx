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

  const onEnter = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      onSubmit(event);
    }
  };

  return (
    <div className="field has-addons is-full-width">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Learn graphs"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={onEnter}
        />
      </div>
      <div className="control">
        <button
          type="submit"
          className="button is-primary"
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
