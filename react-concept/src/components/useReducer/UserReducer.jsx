import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) { 
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div>
    <h2>Count: {state.count}</h2>
    <button onClick={() => dispatch({type: 'increment'})}>increment</button>
    <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
    <button onClick={() => dispatch({type: 'reset'})}>reset</button>
  </div>;
};

export default UserReducer;
