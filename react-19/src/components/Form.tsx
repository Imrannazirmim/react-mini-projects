const Form = () => {
  const formAction = (formData: any) => {
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      pasword: formData.get('password')
    }
    console.log(userData)
  }
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter your password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
