import React, { useState } from 'react'

function Value({ valueWithId, isEditable, updateValuesList, isInTheList }) {

    const [isInTheListState, setisInTheListState] = useState(isInTheList)

    const onInputChange = (e) => {
        const value = e.target.checked;
        setisInTheListState(value);
        updateValuesList(valueWithId.id, value);
    };

    return (
        isEditable ?

            <span>
                {/* input */}
                <div>
                    {valueWithId.valueDTO.name}
                    <input type={"checkbox"} checked={isInTheListState} onChange={onInputChange}
                    value={isInTheListState}></input>
                </div>
            </span>

            :
            isInTheListState ?
                < p > {valueWithId.valueDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Value