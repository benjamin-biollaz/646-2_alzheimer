import React from 'react';
import { TimelineWidget } from './Timeline/Timeline';
import "../CSS/Home.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Information from "./Information";
import { Link } from 'react-router-dom';

export default function Home({ resident }) {

  return (
    <div style={{ marginLeft: "10%", marginTop: "5%" }}>
      <h1 data-testid="1">Hello {resident?.firstName}</h1>
      <Link to="/infos">Information page</Link>
    </div>
  );

}
