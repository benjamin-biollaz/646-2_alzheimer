import React, { useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import IconPicker from "../IconPopup/IconPickerReact";
import { iconSets } from "../IconPopup/IconPickerReact";
import { IconContext } from "react-icons";
import Popup from "reactjs-popup";
import { AiFillCloseCircle } from "react-icons/ai";
import "../../CSS/Preferences.css";

/**
 * Display a preference properties. This component will either render an input
 * or a text box depending on the "idEditable" argument.
 */
function Preference({ prefWithId, isEditable, updatePrefList, onSelect }) {
  const [prefState, setPrefState] = useState(prefWithId.preferenceDTO);
  const [activeSet, setActiveSet] = useState(iconSets[0]);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleSelectIcon = (icon) => {
    setSelectedIcon(icon);
    console.log("Icon selected from Preference " + selectedIcon.name);
  };

  const getIconByName = (iconName) => {
    for (const category of iconSets) {
      for (const icons of category.icons) {
        if (icons.name === iconName) return icons;
      }
    }
  };

  const icon = getIconByName("Viande");
  console.log(icon.icon);

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
        <Popup trigger={<button>Icônes</button>} modal>
          {(close) => (
            <div className="icon-picker-popup">
              <IconContext.Provider value={{ size: "25px", color: "#a78a7f" }}>
                <AiFillCloseCircle onClick={close} />
              </IconContext.Provider>
              <IconPicker onSelect={handleSelectIcon} />
            </div>
          )}
        </Popup>
      </div>
    </div>
  ) : (
    <div className="preferenceDiv">
      &nbsp;{selectedIcon}
      {getIconByName(prefState.iconName).icon}
      {/* <IconPicker
        onSelect={handleSelectIcon}
        setSelectedIcon={handleSelectIcon}
      />
      <div className="selected-icon">
        {selectedIcon && (
          <IconContext.Provider value={{ className: "icon" }}>
            {selectedIcon}
          </IconContext.Provider>
        )}
      </div> */}
      &nbsp;{prefState.label}
    </div>
  );
}

export default Preference;
