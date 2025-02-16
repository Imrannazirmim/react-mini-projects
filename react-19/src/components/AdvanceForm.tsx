import FormButton from "./FormButton";

const AdvanceForm = () => {
  const formAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const postData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(postData);
  };
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="enter your name"
        />
      </div>
      <div>
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          required
          placeholder="enter your password"
        />
      </div>
      <FormButton />
    </form>
  );
};
export default AdvanceForm;
