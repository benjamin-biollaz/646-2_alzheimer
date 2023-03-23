import React, { useState } from 'react'
import FloatLabelInput from "../Form/FloatLabelInput";
import "../../CSS/Preferences.css"

/**
 * Display a preference properties. This component will either render an input
 * or a text box depending on the "idEditable" argument.
 */
function Preference({isEditable, prefWithId }) {

    const [prefState, setPrefState] = useState(prefWithId.preferenceDTO);

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

    // update events list of parent component
    // this is called at every render as setState renders the component again



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
                {prefState.iconName}: {prefState.label}  &nbsp;
            </div>
    )
}

export default Preference