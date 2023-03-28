import React from 'react'

function Religion({ religionWithId, isEditable, updateReligionList }) {

    const [religionState, setReligionSate] = useState(religionWithId.religionDTO);

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;

        //update event state for display
        setReligionSate((prevState) => ({
            ...prevState,
            [fieldName]: value, //es6 computed property syntax
        }))
    };

    // update events list of parent component
    // this is called at every render as setState renders the component again
    if (updateReligionList !== undefined)
        updateReligionList(religionWithId.id, religionState);


    return (
        isEditable ?
            <div className="inputDiv">
                <FloatLabelInput
                    label="Label"
                    name={"label"}
                    value={religionState.name}
                    onChange={onInputChange}
                    type={"text"}
                />
            </div>
            :
            <p>{religionState.name}</p>
    )
}

export default Religion