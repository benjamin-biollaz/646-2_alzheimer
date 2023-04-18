import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../DAL/FirebaseConf";
import Home from "./Home.js";
import Login from "../Components/Login/Login";
import Page404 from "./Page404";
import Information from "./Information";
import Logout from "../Components/Login/Logout";
import Reload from "./Reload";
import "../CSS/App.css";
import IconPicker from "./IconPopup/IconPicker";
import Profile from "./Login/Profile";

function App() {
  const [resident, setResident] = useState(undefined);
  var routes;

  /* Watch for authentication state changes */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (resident) => {
      setResident(resident);
    });
    // Unsubscribe from changes when App is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  localStorage.setItem("update", "false");

  // for testing purpose only
  useEffect(() => {
    testDB();
  }, []);

  if (auth.currentUser) {
    routes = (
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/infos" element={<Information />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/reload" element={<Reload />} />

        {/* No route found - 404 page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  );

  async function testDB() {
    // write here test access to the database
    // those are run when the app starts

  }
}

export default App;
