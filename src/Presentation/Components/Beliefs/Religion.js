import React, {useState} from 'react'
import { ReligionDTO } from '../../../DTO/ReligionDTO';
import { ReligionWithId } from '../../../DTO/ReligionWithId';
import FloatLabelInput from "../Form/FloatLabelInput"

function Religion({ religionWithId, isEditable, updateReligionList, allReligions }) {

    const [religionState, setReligionSate] = useState();

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;

        //update event state for display
        setReligionSate((prevState) => ({
            ...prevState,
            [fieldName]: value, //es6 computed property syntax
        }))
    };

    // update events list of parent component
    // this is called at every render as setState renders the component again
    if (updateReligionList !== undefined)
        updateReligionList(religionWithId.id, religionState);

    return (
        isEditable ?
            <div className="inputDiv">
                <select>
                    {allReligions?.map((r) =>
                        <option>{r.religionDTO.name}</option>
                    )}
                </select>
                <FloatLabelInput
                    label="Label"
                    name={"label"}
                    value={religionState.name}
                    onChange={onInputChange}
                    type={"text"}
                />
            </div>
            :
            <span className="infos_religion">
                <h4>{religionState.name}</h4>
            </span>

    )
}

export default Religion