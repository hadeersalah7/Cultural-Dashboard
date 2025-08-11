import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { UserLogoutDropDown } from "../components";   
const Navbar = () => {
    const { pageTitle } = useContext(DashboardContext);
    return (
        <nav className="flex justify-center h-24">
            <div className="flex justify-between items-center min-[288px]:w-2xs min-[370px]:w-xs min-[454px]:w-md min-[640px]:w-xl 
            min-[900px]:w-2xl xl:w-3xl">
                <h2 className="text-3xl text-[#8a2cf6] font-bold">{pageTitle || "Cultural Dashboard"}</h2>
                <div className="flex items-center gap-1">
                    <UserLogoutDropDown />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
