import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ResidentDAO } from "../../DAL/ResidentDAO";
import Home from "./Home.js";
import Login from "../Components/Login";
import Navbar from "../Components/Navbar";
import Page404 from "./Page404";
import "../CSS/App.css";
import Information from "./Information";
import { PreferenceDAO } from "../../DAL/PreferenceDAO";
import { PreferenceWithId } from "../../DTO/PreferenceWithId";
import { PreferenceDTO } from "../../DTO/PreferenceDTO";

function App() {

  // for testing purpose only
  useEffect(() => {
    testDB();
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
          <Route path="/infos/:id" element={<Information />} />
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
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
