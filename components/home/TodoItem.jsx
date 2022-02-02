import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { deleteTask, toggleMarkAsDone } from '../../redux/tasksSlice';

function TodoItem({
// eslint-disable-next-line react/prop-types
  id, title, done, openDetailsModal, date,
}) {
  const dispatch = useDispatch();

  const deleteTaskHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(deleteTask({ id }));
  };

  const editTaskHandler = () => {
    openDetailsModal(id);
  };

  const toggleMarkAsDoneHandler = () => {
    dispatch(toggleMarkAsDone({ id }));
  };

  const openDetailsModalHandler = () => {
    openDetailsModal(id);
  };

  const cx = classnames('task-item border-2 p-2 mb-4 rounded relative is-flex is-align-content-center ', { done });

  return (
    <div className={cx}>
      <label htmlFor={`task-item-${id}`} className="checkbox p-2">
        <input
          id={`task-item-${id}`}
          onChange={toggleMarkAsDoneHandler}
          type="checkbox"
          className="cursor-pointer"
          checked={done}
          title="mark as done"
        />
      </label>

      <p
        role="presentation"
        className="cursor-pointer"
        onClick={openDetailsModalHandler}
        onKeyPress={openDetailsModalHandler}
      >
        {title}
      </p>
      <p className="date tag is-three-quarters">
        {date.toString()}
      </p>

      <div className="task-item-actions absolute right-0 top-0">
        <button
          type="button"
          title="delete"
          className="button is-danger"
          onClick={deleteTaskHandler}
        >
          Delete
        </button>
        <button
          type="button"
          title="edit"
          className="button is-success"
          onClick={editTaskHandler}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
