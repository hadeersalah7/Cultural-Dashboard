import { useContext } from "react";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { DashboardContext } from "./DashboardContext";
import { ThemeToggler, UserLogoutDropDown } from "../components";
const Navbar = () => {
    const { pageTitle, isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext);
    return (
        <nav className="h-24 pt-10">
            <div className="flex justify-between items-center w-full px-20 max-w-[1440px] mx-auto">
                <button
                    className="cursor-pointer min-[991px]:hidden -translate-x-[50px]"
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                >
                    {isSidebarOpen ? <FaBarsStaggered className="text-[#8a2cf6]" /> : <FaBars className="text-[#8a2cf6]" />}
                </button>
                <h2 className="text-3xl text-[#8a2cf6] font-bold dark:text-white">
                    {pageTitle || "Overview"}
                </h2>
                <div className="flex gap-9 items-center">
                    <UserLogoutDropDown />
                    <ThemeToggler />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
