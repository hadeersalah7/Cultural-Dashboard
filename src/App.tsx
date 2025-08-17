import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoutes } from "./components";
import { CulutralInsights, Dashboard, DigitalArchives, Events, Feedback, Layout, Login, Settings, TeamValues } from "./pages";
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
          >
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/cultural-insights" element={<CulutralInsights />} />
            <Route path="/team-values" element={<TeamValues />} />
            <Route path="/events" element={<Events />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/digital-archives" element={<DigitalArchives />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
        <ToastContainer position="bottom-center" />
      </Router>
    </>
  )
}

export default App
