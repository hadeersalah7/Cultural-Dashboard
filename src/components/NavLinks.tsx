import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { Links } from "../utils/data";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { setPageTitle, toggleSidebar } = useContext(DashboardContext);
  return (
    <section className="pt-8 flex flex-col gap-3">
      {Links.map((l) => (
        <NavLink
          to={l.path}
          key={l.id}
          className={({ isActive }) => {
            const base = "flex items-center py-4 pr-10 text-white";
            const active = isActive ? "bg-[#b58cd7]" : "";
            const hoverPadding = toggleSidebar ? "" : "hover:px-15 px-6";
            const hover = "hover:bg-[#b58cd7] hover:text-white";
            return `${base} ${active} ${hoverPadding} ${hover}`;
          }}
          onClick={() => setPageTitle(l.text)}
        >
          <span className="text-xl ml-4 grid items-center px-2.5">
            {l.icon}
          </span>
          <span className={`${toggleSidebar ? "hidden" : ""}`} title={l.text}>{l.text}</span>
        </NavLink>
      ))}
    </section>
  );
};

export default NavLinks;
