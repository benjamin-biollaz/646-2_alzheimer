import React from 'react'
import "../../CSS/Preferences.css"

function Preference({preferenceDTO}) {
    return (
        <div className="preferenceDiv">
            {preferenceDTO.iconName}: {preferenceDTO.label}  &nbsp;
        </div>
    )
}

export default Preference