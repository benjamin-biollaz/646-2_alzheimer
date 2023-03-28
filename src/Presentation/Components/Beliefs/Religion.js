import React, { useState } from 'react'
import RadioButtonInput from '../Form/RadioButtonInput';


function Religion({ religionWithId, isEditable, updateReligion, isSelected }) {

    const [isSelectedState, setIsSelectedState] = useState(isSelected)

    const onInputChange = (e) => {
        updateReligion(religionWithId.id);
    };

    return (
        isEditable ?

            <RadioButtonInput
                inputName={"religion"}
                label={religionWithId.religionDTO.name}
                onChange={onInputChange}
                value={religionWithId.religionDTO.name}>
            </RadioButtonInput>
            :
            isSelectedState ?
                < p > {religionWithId.religionDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Religion