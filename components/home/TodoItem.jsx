import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { deleteTask, editTask, toggleMarkAsDone } from '../../redux/tasksSlice';

// eslint-disable-next-line react/prop-types
function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  const deleteTaskHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(deleteTask({ id }));
  };

  const editTaskHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      editTask({
        id,
        title: `testing edit ${new Date()}`,
      }),
    );
  };

  const toggleMarkAsDoneHandler = () => {
    dispatch(toggleMarkAsDone({ id }));
  };

  return (
    <div
      className={classnames('task-item', { done })}
      onClick={toggleMarkAsDoneHandler}
      onKeyUp={toggleMarkAsDoneHandler}
      role="presentation"
    >
      <p className="w-full">
        {title}
      </p>
      <div>
        <button
          type="button"
          className="remove-task-button"
          onClick={deleteTaskHandler}
        >
          Delete
        </button>
        <button
          type="button"
          className="edit-task-button"
          onClick={editTaskHandler}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
