import Head from 'next/head';

import AddTodo from '../components/home/AddTodo';
import TodoList from '../components/home/TodoList';

export default function Home() {
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
              <AddTodo />
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}
