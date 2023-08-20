import { BiMenuAltLeft } from "react-icons/bi";
import Switcher from "./Switcher";
import { MdOutlineLogout } from "react-icons/md";


interface Props {
  openDrawer: () => void;
}

const Navbar = ({ openDrawer }: Props) => {
  return (
    <div className="border-b dark:bg-black dark:border-b-gray-800">
      <div className="w-full p-5 flex justify-between items-center">
        <div className="text-2xl font-bold flex justify-start items-center dark:text-white">
          <button className="lg:hidden mr-5" onClick={() => openDrawer()}>
            <BiMenuAltLeft />
          </button>
          <span>Banjararide Admin</span>
        </div>
        <div className="flex justify-start items-center">
          <Switcher />
          <MdOutlineLogout className="ml-5 dark:text-white cursor-pointer" size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
