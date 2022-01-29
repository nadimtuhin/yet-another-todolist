import AddTodo from '../components/home/AddTodo';
import TodoList from '../components/home/TodoList';

export default function Home() {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <h1 className="app-title">My Tasks</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}