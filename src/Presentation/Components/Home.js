import React, { useEffect } from "react";
import { ResidentDAO } from "../../DAL/ResidentDAO";

export default function Home() {

    const [resident, setResident] = React.useState(null);

    useEffect(() => {
      getResident();
    }, []);

    async function getResident() {
        const res = await ResidentDAO.prototype.getresidentById("HvrELV7MRnnJcV24ro1w");
        setResident(res);
      }

    return (
        <div>
            <h1 data-testid="1">Hello World!</h1>
            <h2 data-testid="2">{resident?.firstName}</h2>
        </div>
    );

}