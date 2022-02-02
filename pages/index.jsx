import Head from 'next/head';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import AddTodo from '../components/home/AddTodo';
import TodoList from '../components/home/TodoList';
import Filter from '../components/home/Filter';

export default function Home() {
  const [dateFilter, setDateFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const todos = useSelector((state) => {
    let tasks = [...state.tasks];

    if (statusFilter !== '') {
      const done = statusFilter === 'done';
      tasks = tasks.filter((task) => task.done === done);
    }

    if (dateFilter !== '') {
      if (dateFilter === 'asc') {
        tasks = tasks.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      } else {
        tasks = tasks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      }
    }

    return tasks;
  });

  return (
    <>
      <Head>
        <title>Yet another Todo List app</title>
      </Head>
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth" />
          <div className="column is-three-fifths">
            <div className="mb-4 mt-10">
              <h1 className="title">Todo List</h1>
              <div className="add-todo">
                <AddTodo />
              </div>
              <div className="filter mt-5">
                <Filter
                  dateFilter={dateFilter}
                  setDateFilter={setDateFilter}
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                />
              </div>
            </div>
            <TodoList todos={todos} />
          </div>
        </div>
      </div>
    </>
  );
}
