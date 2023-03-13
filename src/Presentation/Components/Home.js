import React from "react";

export default function Home({ resident }) {
  return (
    <div>
      <h2 data-testid="1">Hello World!</h2>
      <h2 data-testid="2">hello {resident?.firstName}</h2>
    </div>
  );
}
