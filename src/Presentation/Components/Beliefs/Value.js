import React, { useState } from 'react'
import CheckboxInput from '../Form/CheckboxInput';

function Value({ valueWithId, isEditable, updateValuesList, isInTheList }) {

    const [isInTheListState, setisInTheListState] = useState(isInTheList)

    const onInputChange = (e) => {
        const value = e.target.checked;
        setisInTheListState(value);
        updateValuesList(valueWithId.id, value);
    };

    return (
        isEditable ?

            <CheckboxInput
                checkedState={isInTheListState}
                onChange={onInputChange}
                value={isInTheListState}
                label={valueWithId.valueDTO.name}>
            </CheckboxInput>

            :
            isInTheListState ?
                < p > {valueWithId.valueDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Value