import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <section>
      <form className="m-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 rounded"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default Todos;
