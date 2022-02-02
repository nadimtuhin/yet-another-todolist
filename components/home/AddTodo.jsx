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
    <div className="field has-addons columns">
      <div className="control column is-four-fifths">
        <input
          className="input"
          type="text"
          placeholder="Learn graphs"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyUp={onEnter}
        />
      </div>
      <div className="control column">
        <button
          type="submit"
          className="button is-primary"
          onClick={onSubmit}
          disabled={value.trim().length === 0}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
