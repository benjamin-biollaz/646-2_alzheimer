import React from 'react'
import RadioButtonInput from '../Form/RadioButtonInput';

/**
 * Practice renders the details of a resident religion either as an input or a text field 
 * depending if the view is readonly or not.
 */

function Religion({ religionWithId, isEditable, updateReligion, isSelected }) {

    const onInputChange = (e) => {
        updateReligion(religionWithId.id);
    };

    return (
        isEditable ?

            <RadioButtonInput
                inputName={"religion"}
                label={religionWithId.religionDTO.name}
                onChange={onInputChange}
                value={religionWithId.religionDTO.name}
                checked = {isSelected}>
            </RadioButtonInput>
            :
            isSelected ?
                < p > {religionWithId.religionDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Religion