import React from "react";
import { DateFormatter } from "../../Utilities/DateFormatter";

export default function Home({ resident }) {

    const formatter = new DateFormatter();
    const residentAge = formatter.calculateAge(resident?.birthDate)
    const birthDate = formatter.formatDate(resident?.birthDate)
    
    return (
        <div>
            <h1 data-testid="1">Hello World!</h1>
            <h2 data-testid="2">{resident?.firstName} {resident?.lastName}, {residentAge}</h2>
            <h2>{birthDate}</h2>
        </div>
    );

}

