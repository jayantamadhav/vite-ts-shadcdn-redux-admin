import SideBar from "./Sidebar";
import NavBar from "./Navbar";
import { useState } from "react";
export interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [drawer, setDrawer] = useState(false)
  const handleOpenDrawer = () => setDrawer(true)
  return (
    <>
      <div className="h-screen flex overflow-hidden flex-col">
        <NavBar openDrawer={handleOpenDrawer}/>
        <div className="h-full flex justify-start items-start">
          <SideBar drawer={drawer}/>
          <main className="flex-1 flex overflow-hidden dark:bg-black h-full">
            <div className="flex-1 overflow-y-scroll">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
