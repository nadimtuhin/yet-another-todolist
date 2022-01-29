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

  const editTaskHandler = () => {
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
      className={classnames('task-item relative', { done })}
    >
      <label htmlFor={`task-item-${id}`} className="inline-flex items-center p-2">
        <input
          id={`task-item-${id}`}
          onChange={toggleMarkAsDoneHandler}
          type="checkbox"
          className="w-6 h-6 rounded-full cursor-pointer"
          checked={done}
        />
      </label>

      <p className="w-full cursor-pointer">
        {title}
      </p>

      <div className="task-item-actions absolute right-0 top-0 bg-orange">
        <button
          type="button"
          className="remove-task-button p-2"
          onClick={deleteTaskHandler}
        >
          Delete
        </button>
        |
        <button
          type="button"
          className="edit-task-button p-2"
          onClick={editTaskHandler}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
