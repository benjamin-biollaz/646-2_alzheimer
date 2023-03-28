import React from 'react'
import '../../CSS/Beliefs.css'

function RadioButtonInput({ label, onChange, value, inputName }) {
    return (
        <div className='input_checkbox_div'>
            <label className='input_label'>{label}</label>
            <div>
                <input type={"radio"} onChange={onChange} name={inputName}
                    value={value} className="input_checkbox"></input>
            </div>
        </div>
    )
}

export default RadioButtonInput