import moment from 'moment';
import React from 'react'

function PersonalInfos() {
 
    const age = moment().diff(localStorage.getItem("residentBirthDate"), 'years');
    return (
        <div className="personal_infos">
            <span className="patient_name">{localStorage.getItem("residentFirstName")+" "+localStorage.getItem("residentLastName")}</span>
            &nbsp; - &nbsp;
            <span className="patient_name">{age} ans</span>
        
       </div>
    )
}

export default PersonalInfos