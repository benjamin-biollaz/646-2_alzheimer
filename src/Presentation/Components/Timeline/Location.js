import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";
import moment from "moment";

function Location({ location, isEditable, updateLocationList }) {
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

  // update locations list of parent component
  // this is called at every render as setState renders the component again
  updateLocationList(location.id, locationState);

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label={"Ville"}
        value={locationState.name}
        name={"name"}
        onChange={onInputChange}
      />
      <FloatLabelInput
        label={"Début"}
        value={locationState.startDate}
        name={"startDate"}
        type={"date"}
        onChange={onInputChange}
      />
      <FloatLabelInput
        label={"Fin"}
        value={locationState.endDate}
        name={"endDate"}
        type={"date"}
        onChange={onInputChange}
      />
    </div>
  ) : (
    <p>
      {locationState.name} -{" "}
      {moment(locationState.startDate).format("DD/MM/YYYY")}-{" "}
      {moment(locationState.endDate).format("DD/MM/YYYY")}
    </p>
  );
}

export default Location;
