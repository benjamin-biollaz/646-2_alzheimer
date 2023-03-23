import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Page404 from "./Page404";
import "../CSS/App.css";
import Information from "./Information";
import { PreferenceDAO } from "../../DAL/PreferenceDAO";
import IconApi from "./IconApi";
import IconPicker from "./IconApi";

function App() {
  const [resident, setResident] = React.useState(null);

  useEffect(() => {
    getResident();
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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  async function getResident() {
    const prefDAO = new PreferenceDAO();
    const preferences = await prefDAO.getPreferencesByResidentId(
      "HvrELV7MRnnJcV24ro1w"
    );
    preferences.forEach((p) => console.log(p));
  }
}

export default App;
