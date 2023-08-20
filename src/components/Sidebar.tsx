import { RxDashboard } from "react-icons/rx";
import { RiTeamLine, RiMotorbikeFill, RiListCheck3 } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

interface Props {
  drawer: boolean;
}

const SideBar = ({ drawer }: Props) => {
  return (
    <>
      <div className="hidden lg:block h-full w-80 border-r overflow-hidden p-5 dark:bg-black dark:border-r-gray-800">
        <div className="w-full h-full flex flex-col justify-between items-start">
          <div className="w-full">
            <div className="flex justify-start items-center px-5 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              <RxDashboard className="mr-3 text-xl" />
              <span className="text-lg">Dashboard</span>
            </div>
            <div className="flex justify-start items-center px-5 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              <RiTeamLine className="mr-3 text-xl" />
              <span className="text-lg">Staff</span>
            </div>
            <div className="flex justify-start items-center px-5 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              <FiUser className="mr-3 text-xl" />
              <span className="text-lg">Users</span>
            </div>
            <div className="flex justify-start items-center px-5 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              <RiMotorbikeFill className="mr-3 text-xl" />
              <span className="text-lg">Vehicles</span>
            </div>
            <div className="flex justify-start items-center px-5 py-2 rounded-md transition-all duration-200 cursor-pointer hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black">
              <RiListCheck3 className="mr-3 text-xl" />
              <span className="text-lg">Bookings</span>
            </div>
          </div>
          <div className="">Account</div>
        </div>
      </div>

      <div
        className={`${!drawer && "-translate-x-full"}
           fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-64 dark:bg-gray-800
        `}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
      </div>
    </>
  );
};

export default SideBar;
