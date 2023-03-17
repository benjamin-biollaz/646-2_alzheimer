import React from 'react';
import "../CSS/Home.css"

export default function Home({ resident }) {

  return (
    <div style={{ marginLeft: "10%", marginTop: "5%" }}>
      <h1 data-testid="1">Hello</h1>
      <h1 data-testid="2">{resident?.firstName}</h1>
      <button color="link" size="lg" onClick={event => window.location.href='infos/'}>Infos page</button>
    </div>
  );

}
