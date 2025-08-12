import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "../components"

const Layout = () => {
    return (
        <main className="grid lg:grid-cols-[auto_1fr] min-[320px]:grid-cols-[auto]">
            <Sidebar />
            <div>
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Layout