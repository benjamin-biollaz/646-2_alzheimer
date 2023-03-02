import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ResidentDAO } from "../../DAL/ResidentDAO";
import { ResidentDTO } from "../../DTO/ResidentDTO";
import Home from './Home.js';
import Page404 from './Page404';
import '../CSS/App.css';

function App() {
  const [resident, setResident] = React.useState(null);

  useEffect(() => {
    getResident();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home resident={resident} />} />
          <Route path="/home" element={<Home resident={resident} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  async function getResident() {
    const res = await ResidentDAO.prototype.getresidentById("HvrELV7MRnnJcV24ro1w");
    setResident(res);
  }
}

export default App;