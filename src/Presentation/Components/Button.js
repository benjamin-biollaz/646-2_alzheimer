import React from "react";
import "../CSS/Button.css";

const Button = ({ label }) => {
  return (
    <div className="button_container">
      <button className="login_btn">{label}</button>
    </div>
  );
};

export default Button;
