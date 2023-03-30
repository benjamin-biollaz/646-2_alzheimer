import React from 'react'
import { FaEdit } from "react-icons/fa";
import "../../CSS/Button.css";

function EditButton() {
  return (
      <button className="edit_button">
        <FaEdit style={{ width: "25px", color: "#a78a7f" }}></FaEdit>
      </button>
  )
}

export default EditButton