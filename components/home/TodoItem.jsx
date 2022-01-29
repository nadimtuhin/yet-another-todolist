import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasksSlice';

// eslint-disable-next-line react/prop-types
function TodoItem({ id, title }) {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id,
      }),
    );
  };

  return (
    <div className="task-item flex mb-4 items-center">
      <p className="w-full">{title}</p>
      <div>
        <button
          type="button"
          className="remove-task-button"
          onClick={() => { removeTask(); }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
