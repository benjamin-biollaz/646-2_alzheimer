import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../Form/FloatLabelInput";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";

function Period({ period, isEditable, updatePeriodList, deletePeriod }) {
  const [periodState, setPeriod] = useState(period.periodDTO);

  const df = new DateFormatter();

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update period state
    setPeriod((prevState) => ({
      ...prevState,
      [fieldName]: value,
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
        deletePeriod(period.id);
      }
    })
  }

  // update periods list of parent component
  // this is called at every render as setState renders the component again
  updatePeriodList(period.id, periodState);

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label={"Période"}
        value={periodState.name}
        onChange={onInputChange}
        type="text"
        name={"name"}
      />

      <FloatLabelInput
        label={"Début"}
        className="inputTimeline"
        value={periodState.startDate}
        onChange={onInputChange}
        type="date"
        name={"startDate"}
      />

      <FloatLabelInput
        label={"Fin"}
        className="inputTimeline"
        value={periodState.endDate}
        onChange={onInputChange}
        type="date"
        name={"endDate"}
      />
      <BiTrash onClick={handleDelete} size={"20px"} ></BiTrash>
    </div>
  ) : (
    <p>
      {periodState.name} -{" "}
      {df.format_DDMMYYYY(periodState.startDate)}-{" "}
      {df.format_DDMMYYYY(periodState.endDate)}
    </p>
  );
}

export default Period;
