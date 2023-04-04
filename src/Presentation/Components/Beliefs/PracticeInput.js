import React, { useState } from 'react'
import '../../CSS/Beliefs.css'
import CheckboxInput from '../Form/CheckboxInput';

/**
 * PracticeInput is used to enter some practices that didn't figure in 
 * the list.
 */

function PracticeInput({ practiceName, isEditable, updatePracticesList, isInTheList }) {

    const [isInTheListState, setisInTheListState] = useState(isInTheList)
    const [practiceState, setPracticeState] = useState(practiceName);

    const onChecked = (e) => {
        const value = e.target.checked;
        setisInTheListState(value);
        updatePracticesList(practiceName, value);
    };

    const onPracticeInput = (e) => {
        const value = e.target.value;
        setPracticeState(value);
        updatePracticesList(value)
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
                    checkedState={isInTheListState}
                    onChange={onChecked}
                    value={isInTheListState}
                    label={practiceName}>
                </CheckboxInput>
            </span>
            :
            isInTheListState ?
                < p > {practiceName /*readonly*/}</p >
                :
                ""
    )
}

export default PracticeInput