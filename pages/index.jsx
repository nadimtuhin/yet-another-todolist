import Head from 'next/head';

import AddTodo from '../components/home/AddTodo';
import TodoList from '../components/home/TodoList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yet another Todo List app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="app-container">
        <div className="app-wrapper">
          <div className="mb-4">
            <h1 className="app-title">Todo List</h1>
            <div className="flex mt-4">
              <AddTodo />
            </div>
          </div>
          <TodoList />
        </div>
      </div>
    </>
  );
}
