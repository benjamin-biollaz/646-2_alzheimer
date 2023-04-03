import React, { useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import IconPicker from "../IconPopup/IconPicker";
import { iconSets } from "../IconPopup/IconPicker";
import { IconContext } from "react-icons";
import Popup from "reactjs-popup";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../CSS/Preferences.css";

/**
 * Display a preference properties. This component will either render an input
 * or a text box depending on the "idEditable" argument.
 */
function Preference({ prefWithId, isEditable, updatePrefList }) {
  const [prefState, setPrefState] = useState(prefWithId.preferenceDTO);

  const handleSelectIcon = (icon) => {
    setPrefState((prevState) => ({
      ...prevState,
      iconName: icon.name, //es6 computed property syntax
    }));
  };

  const getIconByName = (iconName) => {
    for (const category of iconSets) {
      for (const icons of category.icons) {
        if (icons.name === iconName) return icons;
      }
    }
  };

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update event state for display
    setPrefState((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }));
  };

  // update events list of parent component
  // this is called at every render as setState renders the component again
  if (updatePrefList !== undefined) updatePrefList(prefWithId.id, prefState);

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label="Label"
        name={"label"}
        value={prefState.label}
        onChange={onInputChange}
        type={"text"}
      />

      <div>
        <span className="icon-wrapper">
          {getIconByName(prefState.iconName).icon}
        </span>
        <Popup
          trigger={<button className="form_btn">Icônes</button>}
          nested
          modal
          closeOnDocumentClick={false}
        >
          {(close) => (
            <div className="icon-picker-popup">
              <IconContext.Provider value={{ size: "25px", color: "#a78a7f" }}>
                <AiFillCloseCircle onClick={close} />
              </IconContext.Provider>
              <IconPicker onSelect={handleSelectIcon} onClick={close} />
            </div>
          )}
        </Popup>
      </div>
    </div>
  ) : (
    <div className="preferenceDiv">
      <div className="icon-wrapper">
        {getIconByName(prefState.iconName).icon}
      </div>
      <div className="label-wrapper">&nbsp;{prefState.label}</div>
    </div>
  );
}

export default Preference;
