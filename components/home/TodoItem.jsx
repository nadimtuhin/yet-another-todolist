import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { deleteTask, editTask, toggleMarkAsDone } from '../../redux/tasksSlice';

// eslint-disable-next-line react/prop-types
function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  const deleteTaskHandler = () => {
    dispatch(
      deleteTask({
        id,
      }),
    );
  };

  const editTaskHandler = () => {
    dispatch(
      editTask({
        id,
        title: 'test',
      }),
    );
    // eslint-disable-next-line no-alert
    alert('editing task');
  };

  const toggleMarkAsDoneHandler = () => {
    // console.log(id);
    dispatch(toggleMarkAsDone({ id }));
  };

  return (
    <div className={classnames('task-item flex mb-4 items-center', { done })}>
      <p
        className="w-full"
        onClick={toggleMarkAsDoneHandler}
        onKeyUp={toggleMarkAsDoneHandler}
        role="presentation"
      >
        {title}

      </p>
      <div>
        <button
          type="button"
          className="remove-task-button"
          onClick={() => { deleteTaskHandler(); }}
        >
          Delete
        </button>
        <button
          type="button"
          className="edit-task-button"
          onClick={() => { editTaskHandler(); }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
