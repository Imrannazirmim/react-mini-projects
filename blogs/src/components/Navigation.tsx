import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="w-full h-[7rem] flex justify-between items-center px-10 border-b-2">
      <div className="w-[25rem] flex items-center border-2 rounded-full px-4 my-2 ml-[5rem]">
        <FaSearch />
        <input
          type="text"
          className="w-full bg-transparent outline-none px-4 py-2 "
          placeholder="Blog Search"
        />
      </div>
      <div className="flex items-center mr-[8rem]">
        <FaUserCircle size={28} />
      </div>
    </nav>
  );
};
export default Navigation;
//this is react blog projects
