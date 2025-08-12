import { useContext } from "react"
import { DashboardContext } from "./DashboardContext"
import { IoMdClose } from "react-icons/io"
import { Navlinks } from "."


const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(DashboardContext)
  return (
    <aside className={`${isSidebarOpen ? "max-[991px]:block max-[991px]:fixed max-[991px]:z-10" :
      "max-[991px]:hidden"} drawer drawer open `}>
      <div className="drawer-side ">
        <section className="min-h-screen bg-gradient-to-b from-[#2183e8] to-[#8a2cf6] h-full w-80 rounded-r-lg dark:bg-gradient-to-b 
        dark:from-[#1e3a8a] dark:to-[#6b21a8]">
          <button
            type="button"
            className="min-[991px]:hidden absolute top-2.5 right-2 text-white cursor-pointer"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <IoMdClose />
          </button>
          <div className="flex justify-center pt-8">
            <h2 className="text-2xl text-white font-bold">Cultural Insights</h2>
          </div>

          <Navlinks />
        </section>
      </div>
    </aside>
  )
}

export default Sidebar