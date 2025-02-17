import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <div className="w-[8rem] h-screen fixed bg-gray-900 text-white">
        <aside className="flex flex-col items-center cursor-pointer ">
          <div className="top flex flex-col gap-7 mt-8">
            <FaHome size={28} />
            <FaPerson size={28} />
            <FaSearch size={28} />
          </div>
          <div className="bottom flex flex-col gap-7 absolute bottom-8 ">
            <IoMdSettings size={28} />
            <FaUser size={28} />
          </div>
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
