import React, {useState} from 'react'
import FloatLabelInput from "../Form/FloatLabelInput";
import "../../CSS/Preferences.css"

function Preference({ preferenceDTO, isEditable }) {

    const [prefState, setPrefState] = useState(preferenceDTO);

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;
    
        //update event state for display
        setPrefState((prevState) => ({
          ...prevState,
          [fieldName]: value, //es6 computed property syntax
        }))
    
      };

    return (
        isEditable ?
            <div className="inputDiv">
                <FloatLabelInput
                    label="Label"
                    name={"name"}
                    value={prefState.label}
                    onChange={onInputChange}
                    type={"text"}
                />

                <FloatLabelInput
                    label="Icône"
                    name={"name"}
                    value={prefState.iconName}
                    onChange={onInputChange}
                    type={"text"}
                />
            </div>
            :
            <div className="preferenceDiv">
                {preferenceDTO.iconName}: {preferenceDTO.label}  &nbsp;
            </div>
    )
}

export default Preference