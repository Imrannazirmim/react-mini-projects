import { useReducer } from "react";

type Actions =
  | {
      type: "INCREMENT";
    }
  | { type: "DECREMENT" };

type State = {
  count: number;
};
const initialState = {
  count: 0,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
};
export default CounterReducer;
