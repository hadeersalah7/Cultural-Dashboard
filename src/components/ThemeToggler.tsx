import { useContext } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { DashboardContext } from "./DashboardContext";

const ThemeToggler = () => {
    const {isDark ,setIsDark } = useContext(DashboardContext)
    const handleThemeToggler = () => {
        setIsDark((prev) => !prev)
    }
    return (
        <div className="theme-toggle flex justify-center items-center gap-2 cursor-pointer">
            <span className="text-xl text-[#8a2cf6] dark:text-white">{isDark ? <BiSun /> : <BiMoon />}</span>
            <label className="switch ">
                <input type="checkbox" onChange={handleThemeToggler}/>
                <span className="slider round"></span>
            </label>
        </div>

    )
}

export default ThemeToggler