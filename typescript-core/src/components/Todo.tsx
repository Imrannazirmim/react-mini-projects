import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string, completed: boolean) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <h2>Todo Here</h2>
      <button onClick={() => handleAddTodo("new todo")}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "completed" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
