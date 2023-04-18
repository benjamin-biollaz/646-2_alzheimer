import React, { useCallback, useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import IconPicker from "../IconPopup/IconPicker";
import { iconSets } from "../IconPopup/IconPicker";
import { IconContext } from "react-icons";
import Popup from "reactjs-popup";
import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import "../../CSS/Preferences.css";
import "../../CSS/IconPicker.css"
import { TbTrash } from "react-icons/tb"

/**
 * Display a preference properties. This component will either render an input
 * or a text box depending on the "idEditable" argument.
 */
function Preference({ prefWithId, isEditable, updatePrefList, onDelete }) {
  const [prefState, setPrefState] = useState(prefWithId.preferenceDTO);
  const callback = useCallback(() => onDelete(prefWithId.id), []);
  const [deleted, setDeleted] = useState(false);

  const del = () => {
    Swal.fire({
      title: 'Voulez-vous réellement supprimer ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      reverseButtons: true,
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        setDeleted(true);
      }
    })

  }

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

  return deleted ? null :
    isEditable ? (
      <div>
        <FloatLabelInput
          label="Label"
          name={"label"}
          value={prefState.label}
          onChange={onInputChange}
          type={"text"}
        />

        <div className="preference_input_div">
          <div className="icon-wrapper-edit">
            <div className="icon-edit">
            {getIconByName(prefState.iconName).icon}
            </div>
          </div>
          <Popup
            className={"icon-popup"}
            trigger={<button className="form-btn-pref">Icônes</button>}
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
          <div />
          <div className="trash_button_div">
            <TbTrash onClick={del} className="trash_button" />
          </div>
        </div>
        <hr/>

      </div>
    ) : (
      <div className="preferenceDiv">
        <div className="icon-wrapper">
          {getIconByName(prefState.iconName).icon}
        </div>
        <div className="label-wrapper">&nbsp;{prefState.label}</div>
        <br></br>
      </div>
    );
}

export default Preference;
