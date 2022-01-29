import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.tasks);

  return (
    <ul className="tasks-list">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ul>
  );
}

export default TodoList;
