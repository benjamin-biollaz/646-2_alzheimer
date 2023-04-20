import React, { useState } from "react";
import "../../CSS/TimelineForm.css";
import "semantic-ui-css/semantic.min.css";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";
import swal from "sweetalert";

/**
 * This component is used by all sections to display a form.
 * It takes several functions as props to be flexible enough.
 * Those functions are triggered by the GenericForm buttons.
 */
function GenericForm({
  title,
  className,
  items,
  renderItems,
  addNewItem,
  submitModifications,
  doNotDisplayAddButton,
}) {
  // readonly/edit mode
  const [isEditableState, setIsEditable] = useState(false);

  // this state is used to force rerender when an item is added
  const [emptyState, setEmptyState] = useState(false);

  const add = () => {
    // add a new item at the beginning of the list
    addNewItem();

    // force re-render
    setEmptyState(!emptyState);
  };

  // toggle readonly / edit view
  const toggleView = () => {
    setIsEditable(!isEditableState);
  };

  // update the edited items and add the new ones
  const sendModifications = () => {
    submitModifications();
    toggleView();
    swal({
      timer: 1500,
      icon: "success",
      title: "Sauvegardé!",
    });
  };

  return (
    <div className={"grid_item " + { className }}>
      <div className="header">
        <div className="header_cell">
          <h3 className="sectionTitle">{title}</h3>
          {isEditableState ? (
            <span>
              <AiFillCheckCircle
                onClick={sendModifications}
                color="green"
                size={"20px"}
              />

              {doNotDisplayAddButton ? (
                ""
              ) : (
                <IoIosAddCircle onClick={add} color="#A78A7F" size={"20px"} />
              )}
            </span>
          ) : (
            <button className="edit_button">
              <FaEdit onClick={toggleView} />
            </button>
          )}
        </div>
      </div>

      <div
        className={
          // grey background to mark readonly mode
          isEditableState ? "sectionDiv" : "sectionDiv greyBackground"
        }
      >
        {renderItems(items, isEditableState)}
      </div>
    </div>
  );
}

export default GenericForm;
