import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ query, handleChangeInput }) => {
  return (
    <nav className="w-[70%] flex justify-between mx-auto">
      <div className="m-4 p-2 w-[35rem] ">
        <input
          className="p-3 w-full rounded shadow "
          type="text"
          placeholder="enter your search product"
          onChange={handleChangeInput}
          value={query}
        />
      </div>
      <div className="flex gap-4 m-2 p-2">
        <a href="#" className="flex gap-4 m-4 text-2xl">
          <FiHeart />
          <AiOutlineShoppingCart />
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};
export default Nav;
