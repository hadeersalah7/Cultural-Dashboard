import { useContext } from "react";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { DashboardContext } from "./DashboardContext";
import { ThemeToggler, UserLogoutDropDown } from "../components";
const Navbar = () => {
    const { pageTitle, isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext);
    return (
        <nav className="h-24 pt-10">
            <div className="flex justify-between items-center w-full min-[285px]:pl-6 lg:px-20 max-w-[1440px] mx-auto">
                <div className="flex items-center">
                    <button
                    className="cursor-pointer min-[966px]:hidden min-[285px]:pr-5"
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                >
                    {isSidebarOpen ? <FaBarsStaggered className="text-[#8a2cf6]" /> : <FaBars className="text-[#8a2cf6]" />}
                </button>
                <h2 className=" min-[550px]:text-3xl text-[#8a2cf6] font-bold dark:text-white">
                    {pageTitle || "Overview"}
                </h2>
                </div>
                
                <div className="flex min-[300px]:gap-3 lg:gap-9 items-center min-[285px]:pr-4 md:pr-0">
                    <UserLogoutDropDown />
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
