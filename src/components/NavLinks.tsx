import { useContext } from "react"
import { DashboardContext } from "./DashboardContext"
import { Links } from "../utils/data"
import { NavLink } from "react-router-dom"


const NavLinks = () => {
  const { setPageTitle } = useContext(DashboardContext)
  return (
    <section className="pt-8 flex flex-col gap-3">
      {Links.map((l) => (
        <NavLink to={l.path} key={l.id} className={({ isActive }) => isActive ? "flex items-center py-4 pr-10 text-white hover:bg-gray-700 hover:pl-12 hover:text-white bg-gray-400" : "flex items-center py-4 pr-10 hover:bg-gray-700 hover:pr-12 hover:text-white hover:pl-12 text-white"}
          onClick={() => setPageTitle(l.text)}
        >
          <span className="text-xl ml-4 grid items-center px-2.5">{l.icon}</span>{l.text}
        </NavLink>
      ))}
    </section>
  )
}

export default NavLinks