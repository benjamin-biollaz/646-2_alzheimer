import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";

function Period({ period, isEditable }) {
  const [periodState, setPeriod] = useState(period);

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update event state
    setPeriod((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return isEditable ? (
    <div className="inputDiv">
      <form>
        <input
          className="inputTimeline"
          value={periodState.periodDTO.name}
          onChange={onInputChange}
          type="text"
        ></input>

        <input
          className="inputTimeline"
          value={DateFormatter.prototype.formatDate(
            periodState.periodDTO.startDate
          )}
          onChange={onInputChange}
          type="date"
        ></input>

        <input
          className="inputTimeline"
          value={DateFormatter.prototype.formatDate(
            periodState.periodDTO.endDate
          )}
          onChange={onInputChange}
          type="date"
        ></input>
      </form>
    </div>
  ) : (
    <p>
      {periodState.periodDTO.name} -{" "}
      {DateFormatter.prototype.formatDate(periodState.periodDTO.startDate)}-{" "}
      {DateFormatter.prototype.formatDate(periodState.periodDTO.endDate)}
    </p>
  );
}

export default Period;
