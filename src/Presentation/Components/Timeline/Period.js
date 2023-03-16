import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";

function Period({ period, isEditable }) {
  const [periodState, setPeriod] = useState(period.periodDTO);

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
        value={DateFormatter.prototype.formatDate(periodState.startDate)}
        onChange={onInputChange}
        type="date"
        name={"startDate"}
      />

      <FloatLabelInput
        label={"Fin"}
        className="inputTimeline"
        value={DateFormatter.prototype.formatDate(periodState.endDate)}
        onChange={onInputChange}
        type="date"
        name={"endDate"}
      />
    </div>
  ) : (
    <p>
      {periodState.name} -{" "}
      {DateFormatter.prototype.formatDate(periodState.startDate)}-{" "}
      {DateFormatter.prototype.formatDate(periodState.endDate)}
    </p>
  );
}

export default Period;
