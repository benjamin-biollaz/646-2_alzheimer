import React, { useEffect, useState } from 'react'
import RadioButtonInput from '../Form/RadioButtonInput';

/**
 * ReligionInput renders is an input that can be used by the caregivers to enter
 * arbitrary religion that doesn't figure in the list.
 */

function ReligionInput({ religionName, isEditable, updateReligion, isSelected }) {

    const [religionNameState, setReligionName] = useState(isSelected ? religionName : "")

    const onChecked = (e) => {
        updateReligion(religionNameState);
    };

    const onReligionInput = (e) => {
        const value = e.target.value;
        setReligionName(value);
        updateReligion(value)
    };

    return (
        isEditable ?
            <span className='belief_input_span'>
                <input
                    className="input_belief"
                    id={religionNameState}
                    value={religionNameState}
                    name={"religionName"}
                    onChange={onReligionInput}
                    type={"text"}
                ></input>

                <RadioButtonInput
                    inputName={"religion"}
                    onChange={onChecked}
                    value={religionName}
                    checked={isSelected}>
                </RadioButtonInput>
            </span>
            :
            isSelected ?
                < p > {religionName /*readonly*/}</p >
                :
                ""
    )
}

export default ReligionInput