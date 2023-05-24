import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import FourOFour from "./components/FourOFour";
import RequiredAuth from "./components/RequiredAuth";
import GuestUser from "./components/GuestUser";
import Dashboard from "./components/Dashboard";
import PresistLogin from "./components/PresistLogin";
function App() {
  return (
    <div className="text-white h-screen bg-gray-900">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public Routes */}
            {/* <Route element={<GuestUser />}> */}
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            {/* </Route> */}

            {/* Protected Routes */}
            <Route element={<PresistLogin />}>
              <Route element={<RequiredAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>

            {/* catch all */}
            <Route path="*" element={FourOFour} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
