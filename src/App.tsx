import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from "./components";
import { Dashboard, Layout, Login } from "./pages";
import { useContext, useEffect } from "react";
import { DashboardContext } from "./components/DashboardContext";
function App() {
  const { isDark } = useContext(DashboardContext)
  console.log("isDark: ", isDark)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])


  return (
    <div className={`${isDark ? 'dark' : ""}`}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Layout />
              </ProtectedRoutes>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer position="bottom-center" />
      </Router>
    </div>
  )
}

export default App
