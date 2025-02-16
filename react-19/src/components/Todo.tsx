import { use } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const Todo = () => {
  const data = use(fetchData());

  return (
    <div>
      <h2>{data.id}</h2>
    </div>
  );
};
export default Todo;
