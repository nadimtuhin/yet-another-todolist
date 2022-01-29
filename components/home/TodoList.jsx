import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.tasks);

  return (
    <div className="tasks-list">
      { todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} done={todo.done} />
      )) }
    </div>
  );
}

export default TodoList;
