import { FC, useContext } from "react";
import { MyContext } from "../context/MyContext.tsx";

const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Counter;
