import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";
import { LiaPollHSolid, LiaPollSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { Navlinks } from ".";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, setToggleSidebar, setIsSidebarOpen } =
    useContext(DashboardContext);
  return (
    <aside
      className={`${
        isSidebarOpen
          ? "max-[991px]:block max-[991px]:fixed max-[991px]:z-10"
          : "max-[1025px]:hidden"
      } drawer drawer open `}
    >
      <div className="drawer-side ">
        <section
          className={`fixed top-0 left-0 bottom-0 bg-gradient-to-b from-[#2183e8] to-[#8a2cf6] 
    dark:from-[#1e3a8a] dark:to-[#6b21a8] 
    ${toggleSidebar ? "w-20" : "w-75"} 
    overflow-y-auto z-50`}
        >
          <button
            type="button"
            className="min-[991px]:hidden absolute top-2.5 right-2 text-white cursor-pointer"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <IoMdClose />
          </button>
          <div className="flex justify-center pt-6">
            <button
              title="toggle sidebar"
              className="border-dashed border-4 border-white"
              onClick={() => setToggleSidebar((prev) => !prev)}
            >
              <span className="text-white text-lg cursor-pointer">
                {toggleSidebar ? <LiaPollHSolid /> : <LiaPollSolid />}
              </span>
            </button>
          </div>
          <div className="flex justify-center pt-8">
            <h2
              className={`text-2xl text-white font-bold ${
                toggleSidebar ? "hidden" : "block"
              }`}
            >
              Cultural Insights
            </h2>
          </div>

          <Navlinks />
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
