import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import TodoItemDetails from './TodoItemDetails';

function TodoList() {
  const todos = useSelector((state) => state.tasks);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="tasks-list">
      <TodoItemDetails
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        contentLabel="Example Modal"
      />

      { todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.done}
          openDetailsModal={openModal}
        />
      )) }
    </div>
  );
}

export default TodoList;
