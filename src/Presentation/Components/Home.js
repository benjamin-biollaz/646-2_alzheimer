import React, {useEffect} from "react";
import { ResidentDAO } from "../../DAL/ResidentDAO";
import { ResidentDTO } from "../../DTO/ResidentDTO";

export default function Home() {

    const [resident, setResident] = React.useState();

    useEffect(() => {
        getResident();
    }, []);

    return(
        <div data-testid="1">Hello World!
        <p>{resident?.firstName}</p>
        </div>
    );

    async function getResident() {
        console.log("Accessing resident");
        const res = await ResidentDAO.prototype.getresidentById("HvrELV7MRnnJcV24ro1w");
        setResident(res);
    }

}