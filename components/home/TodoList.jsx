import { useState } from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import TodoItemDetails from './TodoItemDetails';

function TodoList() {
  const todos = useSelector((state) => state.tasks);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  function openModal(todoId) {
    setIsOpen(true);
    setSelectedTodoId(todoId);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedTodoId(null);
  }

  return (
    <div className="tasks-list">
      {
        selectedTodoId && (
          <TodoItemDetails
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            selectedTodoId={selectedTodoId}
          />
        )
      }

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
