import React from 'react';
import { TimelineWidget } from './Timeline/Timeline';
import "../CSS/Home.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Information from "./Information";
import { Link } from 'react-router-dom';
import { EventDAO } from '../../DAL/EventDAO';
import { EventDTO } from '../../DTO/EventDTO';

export default function Home({ resident }) {

  return (
    <div style={{ marginLeft: "10%", marginTop: "5%" }}>
      <h1 data-testid="1">Hello</h1>
      <h1 data-testid="2">{resident?.firstName}</h1>
      <button color="link" size="lg" onClick={event => window.location.href='infos/'}>Infos page</button>
    </div>
  );

}
