import { useActionState } from "react";

const increment = async (previousState, formData) => {
    console.log(formData.get('name'))
    return previousState + 1;
}

const Counter = () => {
    const [state, formAction] = useActionState(increment, 0)
  return <form action="">
    <h2>{state}</h2>
    <button formAction={formAction}>increment</button>
    <input type="text" placeholder="enter your name" name="name" />
  </form>;
};

export default Counter;
