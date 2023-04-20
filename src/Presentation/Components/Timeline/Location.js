import React, { useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";

function Location({ location, isEditable, updateLocationList, deleteLocation }) {
  const [locationState, setLocation] = useState(location.locationDTO);

  const df = new DateFormatter();

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

  const handleDelete = () => {
    Swal.fire({
      title: 'Voulez-vous réellement supprimer ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      reverseButtons: true,
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLocation(location.id);
      }
    })
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
      <BiTrash onClick={handleDelete} size={"20px"} ></BiTrash>
    </div>
  ) : (
    <p>
      {locationState.name} -{" "}
      {df.format_DDMMYYYY(locationState.startDate)}-{" "}
      {df.format_DDMMYYYY(locationState.endDate)}
    </p>
  );
}

export default Location;
