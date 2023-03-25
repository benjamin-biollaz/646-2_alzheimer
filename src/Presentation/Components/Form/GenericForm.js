import React, { useState } from "react";
import "../../CSS/TimelineForm.css";
import "semantic-ui-css/semantic.min.css";
import { FaEdit } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCheckCircle } from "react-icons/ai";

/**
 * This component is used to display the periods, locations and events of a timeline.
 * It takes several functions as props to be flexible enough
 */
function GenericForm({
  title,
  className,
  items,
  renderItems,
  renderAddForm,
  submitModifications,
}) {
  const [isEditableState, setIsEditable] = useState(false);
  const [isAddableState, setIsAddable] = useState(false);

  const toggleView = () => {
    setIsEditable(!isEditableState);
  };
  const toggleAdd = () => {
    setIsAddable(!isAddableState);
  };

  const sendModifications = () => {
    submitModifications();
    toggleView();
  };

  return (
    <div className={"grid_item " + {className}}>
      <div className="header">
        <div className="header_cell">
          <h3 className="sectionTitle">{title}</h3>
          {isAddableState ? (
            <FaEdit onClick={toggleView} color="grey" size={"20px"} />
          ) : isEditableState ? (
            <span>
              <AiFillCheckCircle
                onClick={sendModifications}
                color="green"
                size={"20px"}
              />

              <IoIosAddCircle
                onClick={toggleAdd}
                color="#A78A7F"
                size={"20px"}
              />
            </span>
          ) : (
            <FaEdit onClick={toggleView} color="grey" size={"20px"} />
          )}
        </div>
      </div>
      {isAddableState ? (
        <div className="sectionDiv">{renderAddForm()}</div>
      ) : (
        <div
          className={
            isEditableState ? "sectionDiv" : "sectionDiv greyBackground"
          }
        >
          {renderItems(items, isEditableState)}
        </div>
      )}
    </div>
  );
}

export default GenericForm;
