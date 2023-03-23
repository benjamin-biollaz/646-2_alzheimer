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
    const prefDAo = new PreferenceDAO();
    const resId = "HvrELV7MRnnJcV24ro1w";
    const preference = await prefDAo.getPreferencesByResidentId(resId);

    const newPref = new PreferenceWithId(null, new PreferenceDTO("TEst", "are you sure", "Alimentation"));

    console.log(preference[0])
    console.log(newPref)

    await prefDAo.updatePreference(resId, preference[0], newPref);
  }
}

export default App;
