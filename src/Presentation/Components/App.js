import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ResidentDAO } from "../../DAL/ResidentDAO";
import Home from "./Home.js";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Page404 from "./Page404";
import "../CSS/App.css";
import Information from "./Information";

function App() {
  const [resident, setResident] = React.useState(null);

  useEffect(() => {
    getResident();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/infos" element={<Information />} />
          <Route path="/" element={<Home resident={resident} />} />
          <Route path="/home" element={<Home resident={resident} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  async function getResident() {
    const res = await ResidentDAO.prototype.getresidentById(
      "HvrELV7MRnnJcV24ro1w"
    );
    const res = await ResidentDAO.prototype.getresidentById(
      "HvrELV7MRnnJcV24ro1w"
    );
    setResident(res);
  }
}

export default App;
