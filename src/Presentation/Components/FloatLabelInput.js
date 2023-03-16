import React from "react";
import "../CSS/TimelineForm.css";

const FloatLabelInput = ({ label, value, name, onChange }) => {
  return (
    <div id="float-label">
      <label className="float_label">{label}</label>
      <input
        className="inputTimeline"
        id={label}
        value={value}
        name={name}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default FloatLabelInput;
