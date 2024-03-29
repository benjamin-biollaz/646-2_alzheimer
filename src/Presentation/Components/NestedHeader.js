import React, { useCallback } from "react";
import { FaEdit } from "react-icons/fa";

import "../CSS/SectionHeader.css";
import Popup from "reactjs-popup";

/**
 * Header of sections such as Preferenecs, Timeline, ...
 * This header takes a title, and a popup content as props.
 * @param {*} param0
 * @returns
 */

function NestedHeader({ sectionTitle, popupContent, onClose }) {
  return (
    <div className="section_header">
      <div className="center_content">
        <h3 className="label">{sectionTitle}</h3>
      </div>
      <Popup
        nested
        className-content={"form-popup-content"}
        onClose={useCallback(() => onClose(), [popupContent])}
        trigger={
          <button className="edit_button">
            <FaEdit></FaEdit>
          </button>
        }
        closeOnDocumentClick
        modal
        position="center center"
      >
        {popupContent}
      </Popup>
    </div>
  );
}

export default NestedHeader;
