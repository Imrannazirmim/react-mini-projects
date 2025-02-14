import { FormEvent, useRef, useState } from "react";

type FormProps = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submitedData, setSubmitedData] = useState<FormProps>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmitedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={name} placeholder="enter your name" />
      <input type="email" ref={email} placeholder="enter your email" />
      <input type="password" ref={password} placeholder="enter your password" />
      <button type="submit">Submit</button>
      <section>
        <h2>Name: {submitedData.name}</h2>
        <h2>Email: {submitedData.email}</h2>
        <h2>Password: {submitedData.password}</h2>
      </section>
    </form>
  );
};
export default Form;
