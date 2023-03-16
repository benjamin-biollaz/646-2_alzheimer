import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";
function Location({ location, isEditable }) {
  const [locationState, setLocation] = useState(location.locationDTO);

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update location state
    setLocation((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }));
  };

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput label={"Ville"} value={locationState.locationDTO.name} />
      <FloatLabelInput
        label={"Début"}
        value={DateFormatter.prototype.formatDate(
          locationState.locationDTO.startDate
        )}
      />
      <FloatLabelInput
        label={"Fin"}
        value={DateFormatter.prototype.formatDate(
          locationState.locationDTO.endDate
        )}
      />
    </div>
  ) : (
    <p>
      {locationState.name} -{" "}
      {DateFormatter.prototype.formatDate(locationState.startDate)}-{" "}
      {DateFormatter.prototype.formatDate(locationState.endDate)}
    </p>
  );
}

export default Location;
