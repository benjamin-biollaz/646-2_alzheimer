import React from "react";

export default function Home({ resident }) {
    return (
        <div>
            <h1 data-testid="1">Hello World!</h1>
            <h2 data-testid="2">{resident?.firstName}</h2>
        </div>
    );

}