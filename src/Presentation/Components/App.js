import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Page404 from "./Page404";
import "../CSS/App.css";
import Information from "./Information";
import { PreferenceDAO } from "../../DAL/PreferenceDAO";
import IconPicker from "./IconApi";
import { PreferenceDAO } from "../../DAL/PreferenceDAO";
import { PreferenceWithId } from "../../DTO/PreferenceWithId";
import { PreferenceDTO } from "../../DTO/PreferenceDTO";

function App() {
  localStorage.setItem("update", "false");

  // for testing purpose only
  useEffect(() => {
    testDB();
  }, []);

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/icon"
            element={<IconPicker onSelect={handleIconSelect} />}
          />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/infos/:id" element={<Information />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/infos" element={<Information />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  async function testDB() {
    // write here test access to the database
    // those are run when the app starts
  }
}

export default App;
