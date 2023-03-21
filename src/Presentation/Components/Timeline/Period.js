import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../Form/FloatLabelInput";

function Period({ period, isEditable, updatePeriodList }) {
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
