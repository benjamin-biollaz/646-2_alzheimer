import React from "react";
import "../CSS/Button.css";

function ButtonForm({ label }) {
  return (
    <span className="button_form">
      <button className="form_btn">{label}</button>
    </span>
  );
}

export default ButtonForm;
