import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from "./components";
import { Dashboard, Layout, Login } from "./pages";

function App() {


  return (
    <>
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
    </>
  )
}

export default App
