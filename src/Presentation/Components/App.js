import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Home.js';
import Page404 from "./Page404.js";
import '../CSS/App.css';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
  );

}

export default App;