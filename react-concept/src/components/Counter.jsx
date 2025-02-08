import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./useReducer/counterReducer";
const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleAddAmount = () => {
    dispatch({ type: "incrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementAmount = () => {
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddAmount}>Add</button>
        <button onClick={handleDecrementAmount}>Subtract</button>
      </div>
    </div>
  );
};

export default Counter;
