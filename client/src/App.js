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
import Avatar from "./pages/Avatar";
import SideBar from "./layouts/SideBar";
import RightBar from "./layouts/RightBar";
import Profile from './pages/Profile'
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div className="text-white   ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public Routes */}
            {/* <Route element={<GuestUser />}> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* </Route> */}

            {/* catch all */}
            <Route path="*" element={FourOFour} />
          </Route>
        </Routes>
        {/* Protected Routes */}
        <div className=" flex justify-between">
        <SideBar />
          <Routes>
            <Route element={<PresistLogin />}>
              <Route element={<RequiredAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/avatar" element={<Avatar />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/post/:slug" element={<PostDetail />} />
              </Route>
            </Route>
          </Routes>
          <RightBar/>
        </div>
      </Router>
    </div>
  );
}

export default App;
