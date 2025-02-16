import { use } from "react";
import { ThemeContext } from "./Theme.tsx";

const Card = () => {
  const context = use(ThemeContext);
  if (!context) throw new Error("Card must be use within theme");
  const { theme, toggleTheme } = context;
  return (
    <div
      className={`w-[20rem] p-[2rem] ${theme === "light" ? "bg-white" : "bg-gray-900"}`}
    >
      <h1
        className={`text-teal-300 ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Theme Card
      </h1>
      <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut
        blanditiis dignissimos expedita facilis natus necessitatibus possimus
        quod quos reprehenderit?
      </p>
      <button
        className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
        onClick={toggleTheme}
      >
        change
      </button>
    </div>
  );
};

export default Card;
