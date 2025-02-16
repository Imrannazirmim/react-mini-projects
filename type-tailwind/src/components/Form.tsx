import {  SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-200 mx-auto m-4 p-4 rounded shadow w-[30rem] flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xl text-gray-700">
          Name:{" "}
        </label>
        <input
          type="text"
          id="name"
          className="w-full shadow p-3 rounded"
          placeholder="enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xl text-gray-700">
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          className="w-full shadow p-3 rounded"
          placeholder="test@gmail.com"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
              message: "Must be a valid @gmail.com address",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xl text-gray-700">
          Password:{" "}
        </label>
        <input
          type="text"
          id="password"
          className="w-full shadow p-3 rounded"
          placeholder="enter your password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 8,
              message: "minimum 8 charecter",
            },
            maxLength: {
              value: 30,
              message: "maximum 30 character",
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,30}$/,
              message: "Must include uppercase, number, and special character",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-300 px-2 py-4 rounded text-xl text-gray-700 active:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
