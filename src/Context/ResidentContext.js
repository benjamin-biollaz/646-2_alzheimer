import React from "react";
import { ResidentDTO } from "../DTO/ResidentDTO";

export const ResidentContext = React.createContext({
    residentId: "",
    resident: ResidentDTO,
    timelineId: ""
})
