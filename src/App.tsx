import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from "./components";
import { Dashboard, Layout, Login } from "./pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store";
import { getUserData } from "./redux-features/user/userSlice";

function App() {
const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
  dispatch(getUserData())
}, [])
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
