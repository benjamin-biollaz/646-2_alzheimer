import React, { useState } from 'react'
import '../../CSS/Beliefs.css'
import CheckboxInput from '../Form/CheckboxInput';

function Practice({ practiceWithId, isEditable, updatePracticesList, isInTheList }) {

    const [isInTheListState, setisInTheListState] = useState(isInTheList)

    const onInputChange = (e) => {
        const value = e.target.checked;
        setisInTheListState(value);
        updatePracticesList(practiceWithId.id, value);
    };

    return (
        isEditable ?
            <CheckboxInput
                checkedState={isInTheListState}
                onChange={onInputChange}
                value={isInTheListState}
                label={practiceWithId.practiceDTO.name}>
            </CheckboxInput>

            :
            isInTheListState ?
                < p > {practiceWithId?.practiceDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Practice