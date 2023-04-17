import React, { useState } from 'react'
import '../../CSS/Beliefs.css'
import CheckboxInput from '../Form/CheckboxInput';

/**
 * PracticeInput is used to enter some practices that didn't figure in 
 * the list.
 */

function PracticeInput({ practiceName, isEditable, updatePracticesList, isInTheList, removeFromList }) {

    const [practiceState, setPracticeState] = useState(practiceName);

    const onChecked = (e) => {
        removeFromList(practiceState);
    };

    const onPracticeInput = (e) => {
        const value = e.target.value;
        setPracticeState(value);
        updatePracticesList(practiceState, value)
    };

    return (
        isEditable ?
            <span className='belief_input_span'>
                <input
                    className="input_belief"
                    id={practiceState}
                    value={practiceState}
                    name={"practiceName"}
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
            < p > {practiceState /*readonly*/}</p >

    )
}

export default PracticeInput