import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { ThemeToggler, UserLogoutDropDown } from "../components";
const Navbar = () => {
    const { pageTitle } = useContext(DashboardContext);
    return (
        <nav className="h-24 pt-10">
            <div className="flex justify-between items-center w-full px-20 max-w-[1440px] mx-auto">
                <h2 className="text-3xl text-[#8a2cf6] font-bold dark:text-white">
                    {pageTitle || "Cultural Dashboard"}
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
