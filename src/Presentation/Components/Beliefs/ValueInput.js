import React, { useState } from 'react'
import '../../CSS/Beliefs.css'
import CheckboxInput from '../Form/CheckboxInput';

/**
 * PracticeInput is used to enter some practices that didn't figure in 
 * the list.
 */

function ValueInput({ valueName, isEditable, updateValuesList, isInTheList, removeFromList }) {

    const [valueState, setValueState] = useState(valueName);

    const onChecked = (e) => {
        removeFromList(valueState);
    };

    const onPracticeInput = (e) => {
        const value = e.target.value;
        setValueState(value);
        updateValuesList(valueState, value)
    };

    return (
        isEditable ?
            <span className='belief_input_span'>
                <input
                    className="input_belief"
                    id={valueState}
                    value={valueState}
                    name={"valueName"}
                    onChange={onPracticeInput}
                    type={"text"}
                ></input>
                <CheckboxInput
                    checkedState={isInTheList}
                    onChange={onChecked}
                    value={isInTheList}
                    label={""}>
                </CheckboxInput>
            </span>
            :
            < p > {valueState /*readonly*/}</p >

    )
}

export default ValueInput