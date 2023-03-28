import React, { useState } from 'react'

function Practice({ practiceWithId, isEditable, updatePracticesList, isInTheList }) {

    const [isInTheListState, setisInTheListState] = useState(isInTheList)

    const onInputChange = (e) => {
        const value = e.target.checked;
        setisInTheListState(value);
        updatePracticesList(practiceWithId.id, value);
    };

    return (
        isEditable ?

            <span>
                {/* input */}
                <div>
                    {practiceWithId.practiceDTO.name}
                    <input type={"checkbox"} checked={isInTheListState} onChange={onInputChange}
                    value={isInTheListState}></input>
                </div>
            </span>

            :
            isInTheListState ?
                < p > {practiceWithId?.practiceDTO.name /*readonly*/}</p >
                :
                ""
    )
}

export default Practice