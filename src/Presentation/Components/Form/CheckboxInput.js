import React from 'react'
import '../../CSS/Beliefs.css'

function CheckboxInput({label, checkedState, onChange, value,}) {
    return (
        <div className='input_checkbox_div'>
            <label className='input_label'>{label}</label>
            <div checkbox_div>
                <input type={"checkbox"} checked={checkedState} onChange={onChange}
                    value={value} className="input_checkbox"></input>
            </div>
        </div>
    )
}

export default CheckboxInput